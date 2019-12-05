import DataS from "./Data";
import React from "react";
class SidebarR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='Sidebar'>
        <DataS data={this.props.data["energy use"]} />
        <DataS data={this.props.data.temperature} />
        <DataS data={this.props.data["atmospheric pressure"]} />
      </div>
    );
  }
}

export default SidebarR;
