import Data  from "./Data";
import React from "react";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Sidebar">
        <Data data={this.props.data} />
        <Data data={this.props.data} />
        <Data data={this.props.data} />
      </div>
    );
  }
}

export default Sidebar;
