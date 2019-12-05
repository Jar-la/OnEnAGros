<<<<<<< HEAD
import Board  from "./Board";
=======
import Board from "./Board";
>>>>>>> 1e8603a54dfd6895ce2236924a21100440780f78
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='home'>
        <board data={this.props.data} />
      </div>
    );
  }
}

export default Home;
