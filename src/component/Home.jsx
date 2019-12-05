import Board  from "./Board";
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
