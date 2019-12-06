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
        <Badge />
        {(this.props)? <News data={this.props.data} /> : ""}
      </div>
    );
  }
}

export default Header;
