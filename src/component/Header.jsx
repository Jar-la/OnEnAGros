import React from "react";
import Badge from "./Badge";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        <h2 className="title">Selene 2019</h2>
      </div>
    );
  }
}

export default Header;
