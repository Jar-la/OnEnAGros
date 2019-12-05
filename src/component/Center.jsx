import React from "react";
import Alert from "./Alert";
import Control from "./Control";
import Date from "./Date";

class Center extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Center">
        <Date data={this.props.data} />
        <Control />
        <Alert data={this.props.data} />
      </div>
    );
  }
}

export default Center;
