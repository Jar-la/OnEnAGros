import React from "react";
import PBar from "./PBar";
import ComPBar from "./ComPBar";

class DataS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let critic =
      this.props.min + (this.props.max - this.props.min) * 0.15 <
      this.props.value <
      this.props.max - (this.props.max - this.props.min) * 0.15
        ? false
        : true;
    return (
      <div className='DataS' id={this.props.name}>
        {this.props.name}
        <PBar actual={this.props.value} critical={critic} />
      </div>
    );
  }
}

export default DataS;
