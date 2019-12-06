import DataC from "./DataC";
import React from "react";


class SidebarL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='Sidebar'>
        <DataC data={this.props.water} />
        <DataC data={this.props.air} />
        <DataC data={this.props.food} />
      </div>
    );
  }
}

export default SidebarL;
