<<<<<<< HEAD
import Data  from "./Data";
=======
import Data from "./Data";
>>>>>>> 1e8603a54dfd6895ce2236924a21100440780f78
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
