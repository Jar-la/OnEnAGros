import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import fetch from "node-fetch";

import ErrorNotFound from "./page/ErrorNotFound";
import Home from "./page/Home";

import './App.css';

class App extends React.Component{

  constructor(){
    super();

    this.state = { data : {}}
  }

  componentDidMount(){
    setInterval(this.updateData.bind(this), 5 * 1000);
  }

  updateData(){
    fetch("http://localhost:8080/data", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(json => this.setState({data : json}));
  }

  render(){
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
  
}

export default App;
