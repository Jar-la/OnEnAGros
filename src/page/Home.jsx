import Board from "../component/Board";
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        {this.props.doc.webServices !== undefined &&
        this.props.data.date !== undefined ? (
          <Board data={this.props.data} doc={this.props.doc} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Home;
