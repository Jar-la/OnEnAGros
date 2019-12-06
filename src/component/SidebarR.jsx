import DataS from "./DataS";
import React from "react";
import { faBatteryHalf, faTemperatureLow, faUserTie } from "@fortawesome/free-solid-svg-icons";
class SidebarR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="SidebarR">
        <DataS icon={faBatteryHalf} data={this.props.data["energy use"]} />
        <DataS icon={faTemperatureLow} data={this.props.data.temperature} />
        <DataS
          icon={faUserTie}
          data={this.props.data["atmospheric pressure"]}
        />
      </div>
    );
  }
}

export default SidebarR;
