import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import fetch from "node-fetch";

import ErrorNotFound from "./page/ErrorNotFound";
import Home from "./page/Home";

import './App.css';


class App extends React.Component{

  constructor(){
    super();

    this.state = { data: { date: {}, data: {}, "breaking news": {} }, doc: {}};
  }

  componentDidMount(){
    this.updateData();
    setInterval(this.updateData.bind(this), 5 * 1000);
    this.baseValue();
    
  }


  async updateData(){
    fetch("http://localhost:8080/data", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(json => this.setState({data : json}));
  }

  async baseValue(){
    fetch("http://localhost:8080/doc", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(json => this.setState({doc : json}));
  }

  render(){
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home data={this.state.data} doc={this.state.doc} />}
            />
            <Route path="*" component={ErrorNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
