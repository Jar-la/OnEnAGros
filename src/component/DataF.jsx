import React from "react";
import PBar from "./PBar";

class DataF extends React.Component {
  moye() {
    let i = 0;
    i +=
      this.props.data["escherichia coli"].value / this.props.data["escherichia coli"].min;
    i +=
      this.props.data["listeria monocytogenes"].value /
      this.props.data["listeria monocytogenes"].min;
    i +=
      this.props.data["salmonella enterica"].value /
      this.props.data["salmonella enterica"].min;
    i /= 3;
    return i;
  }

  render() {
    return (
      <div className='Data'>
        {this.props.id}
        <PBar actual={this.moye()} seuil={0.15} />
      </div>
    );
  }
}

export default DataF;
