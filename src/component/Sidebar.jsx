import DataS  from "./Data";
import React from "react";
class SidebarR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Sidebar">
        <DataS data={this.props.data} />
        <DataS data={this.props.data} />
        <DataS data={this.props.data} />
      </div>
    );
  }
}

export default SidebarR;
