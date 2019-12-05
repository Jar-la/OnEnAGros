const { createServer } = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const morgan = require("morgan");

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
const app = express();
const dev = app.get("env") !== "production";



app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

  app.use(express.static(path.resolve(__dirname, "build")));

  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

if (dev) {
  app.use(morgan("dev"));
  app.use(express.static(path.resolve(__dirname, "build")));
}


const server = createServer(app);

server.listen(PORT, err => {
  if (err) throw err;
  console.log("Server started");
  console.log(`Server listening on port ${PORT}`);
});
