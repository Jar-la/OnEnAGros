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
      <div className='Center'>
        <Date />
        <Alert />
        <Control />
      </div>
    );
  }
}

export default Center;
