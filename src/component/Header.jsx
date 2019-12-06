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
        <Badge />
      </div>
    );
  }
}

export default Header;
