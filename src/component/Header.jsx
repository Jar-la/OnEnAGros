import React from "react";
import News from "./News";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        Header
        <News />
      </div>
    );
  }
}

export default Header;
