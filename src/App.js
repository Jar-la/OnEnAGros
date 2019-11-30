import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import ErrorNotFound from "./page/ErrorNotFound";
import Home from "./page/Home";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={ErrorNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
