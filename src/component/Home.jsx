import Board  from "./Board";
import React from "react";
import IA from "IA";

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

 


  render() {
    return (
      <div className="home">
        <IA />
        <Board data={this.props.data} doc={this.props.doc} />
      </div>
    );
  }
}

export default Home;
