import DataW from "./DataW";
import React from "react";
import { faTint, faWind, faHamburger } from "@fortawesome/free-solid-svg-icons";

class SidebarL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="SidebarL">
        <DataW
          icon={faTint}
          id="Potabilité de l'eau"
          data={this.props.data.water.calcium}
        />
        <DataW
          icon={faWind}
          id="Fiabilité de l'air"
          data={this.props.data.air.dioxygene}
        />
        <DataW
          icon={faHamburger}
          id="Fiabilité de la nourriture"
          data={this.props.data.food["escherichia coli"]}
        />
      </div>
    );
  }
}

export default SidebarL;
