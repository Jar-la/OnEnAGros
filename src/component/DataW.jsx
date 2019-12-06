import React from "react";
import PBar from "./PBar";

class DataW extends React.Component {
  moye() {
    let i = 0;
    i += this.props.data.calcium.value / this.props.data.calcium.min;
    i += this.props.data.fluorures.value / this.props.data.fluorures.min;
    i += this.props.data["heavy metals"].value / this.props.data["heavy metals"].min;
    i += this.props.data.sulfates.value / this.props.data.sulfates.min;
    i += this.props.data.bicarbonate.value / this.props.data.bicarbonate.min;
    i += this.props.data.sodium.value / this.props.data.sodium.min;
    i += this.props.data.chlorures.value / this.props.data.chlorures.min;
    i += this.props.data.magnesium.value / this.props.data.magnesium.min;
    i += this.props.data.silice.value / this.props.data.silice.min;
    i +=
      this.props.data["vibrio cholerea"].value / this.props.data["vibrio cholerea"].min;
    i += this.props.data.nitrates.value / this.props.data.nitrates.min;
    i +=
      this.props.data["escherichia coli"].value / this.props.data["escherichia coli"].min;
    i /= 12;
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

export default DataW;
