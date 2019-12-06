import React from "react";
import PBar from "./PBar";

class DataS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let diff = (this.props.data.max - this.props.data.min) * 0.15;
    let sMin = parseFloat(this.props.data.min) + diff;
    let sMax = parseFloat(this.props.data.max) - diff;
    let critic = sMin < parseFloat(this.props.data.value) < sMax ? false : true;
    return (
      <div className='DataS' id={this.props.data.name}>
        <p>{this.props.data.name}</p>
        <PBar
          actual={(this.props.data.value / this.props.data.max) * 100}
          critical={critic}
        />
      </div>
    );
  }
}

export default DataS;
