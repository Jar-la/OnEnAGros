import React from "react";
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
