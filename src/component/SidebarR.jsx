import DataS from "./DataS";
import React from "react";
class SidebarR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='Sidebar'>
        <DataS id='energy' data={this.props["energy use"]} />
        <DataS id='temperature' data={this.props.temperature} />
        <DataS id='atmospheric presse' data={this.props["atmospheric pressure"]} />
      </div>
    );
  }
}

export default SidebarR;
