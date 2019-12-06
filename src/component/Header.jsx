import React from "react";
import News from "./News";
import Badge from "./Badge";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        Header
        <Badge />
        <News />
      </div>
    );
  }
}

export default Header;
