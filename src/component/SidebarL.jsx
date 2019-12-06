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
<<<<<<< HEAD
      <div className='SidebarL'>
        <DataW id="Potabilité de l'eau" data={this.props.data.water} />
        <DataA data={this.props.data.air} />
        <DataF data={this.props.data.food} />
=======
      <div className='Sidebar'>
        <DataW id="Potabilité de l'eau" data={this.props.data.water.calcium} />
        <DataW id="Fiabilité de l'air" data={this.props.data.air.dioxygene} />
        <DataW
          id='Fiabilité de la nourriture'
          data={this.props.data.food["escherichia coli"]}
        />
>>>>>>> 64c442d679b77ba35106b96670490ed36de26773
      </div>
    );
  }
}

export default SidebarL;
