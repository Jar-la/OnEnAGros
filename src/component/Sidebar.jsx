import { Data } from "./Data";
import React from "react";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='Sidebar'>
        <Data />
        <Data />
        <Data />
      </div>
    );
  }
}

export default Sidebar;
