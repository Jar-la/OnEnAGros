import Board  from "./Board";
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.doc);
    return (
      <div className='home'>
        <board data={this.props.data} doc={this.props.doc}/>
      </div>
    );
  }
}

export default Home;
