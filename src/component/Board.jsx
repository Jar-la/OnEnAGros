import React from "react";
import Header from "./Header";
import Center from "./Center";
import SidebarR from "./Sidebar";



class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.doc);
    return (
      <div className="Board">
        <Header data={this.props.data["breaking news"]} />
        <SidebarR data={this.props.data.data} />
        <Center data={this.props.data} />
        <SidebarR data={this.props.data.data} />
      </div>
    );
  }
}

export default Board;
