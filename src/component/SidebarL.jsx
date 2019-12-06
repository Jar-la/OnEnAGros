import DataW from "./DataW";
import React from "react";

class SidebarL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='SidebarL'>
        <DataW id="Potabilité de l'eau" data={this.props.data.water.calcium} />
        <DataW id="Fiabilité de l'air" data={this.props.data.air.dioxygene} />
        <DataW
          id='Fiabilité de la nourriture'
          data={this.props.data.food["listeria monocytogenes"]}
        />
      </div>
    );
  }
}

export default SidebarL;
