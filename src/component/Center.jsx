import React from "react";
import Alert from "./Alert";
import Control from "./Control";

class Center extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='Center'>
        <Alert />
        <Control />
      </div>
    );
  }
}

export default Center;
