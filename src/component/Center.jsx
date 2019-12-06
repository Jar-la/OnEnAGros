import React from "react";
import Alert from "./Alert";
import Control from "./Control";
import Date from "./Date";
import News from "./News";


class Center extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Center">
        <Date data={this.props.data} />
        <News data={this.props.data["breaking news"]} /> 
        <Control />
        <Alert data={this.props.data} />
      </div>
    );
  }
}

export default Center;
