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
      <div className="Board">
        {console.log(this.props.data)}
        <Header data={this.props.data["breaking news"]} />
        <Sidebar data={this.props.data.data} />
        <Center data={this.props.data} />
        <Sidebar data={this.props.data.data} />
      </div>
    );
  }
}

export default Board;
