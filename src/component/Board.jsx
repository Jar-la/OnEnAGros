import React from "react";
<<<<<<< HEAD
=======
import Component from "react";
>>>>>>> 1e8603a54dfd6895ce2236924a21100440780f78
import Header from "./Header";
import Center from "./Center";
import Sidebar from "./Sidebar";


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='Board'>
        <Header />
        <Sidebar />
        <Center />
        <Sidebar />
      </div>
    );
  }
}

export default Board;
