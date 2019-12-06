import DataW from "./DataW";
import DataA from "./DataA";
import DataF from "./DataF";
import React from "react";

class SidebarL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='SidebarL'>
        <DataW id="Potabilité de l'eau" data={this.props.data.water} />
        <DataA data={this.props.data.air} />
        <DataF data={this.props.data.food} />
      </div>
    );
  }
}

export default SidebarL;
