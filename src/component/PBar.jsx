import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";

class PBar extends React.Component {


  render() {
    return (
      <div>
        <ProgressBar
          animated
          now={this.props.actual}
          striped
          variant={this.props.critical ? "danger" : "success"}
        />
        {`${this.props.actual.toFixed(3)} / 100`}
      </div>
    );
  }
}

export default PBar;
