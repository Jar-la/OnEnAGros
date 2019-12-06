import React from "react";
import PBar from "./PBar";

class DataA extends React.Component {
  moye() {
    let i = 0;

    if (this.props.data !== undefined) {
      console.log(this.props.data["carbon dioxide"].min);
      i =i +
        parseFloat(this.props.data["carbon dioxide"].value) /
          parseFloat(this.props.data["carbon dioxide"].max);
      console.log(i);
      i +=
        parseFloat(this.props.data["legionelle pneumophila"].value) /
        parseFloat(this.props.data["legionelle pneumophila"].max);
      i +=
        parseFloat(this.props.data["sulphur dioxide"].value) /
        parseFloat(this.props.data["sulphur dioxide"].max);
      i +=
        parseFloat(this.props.data.dioxygene.value) /
        parseFloat(this.props.data.dioxygene.max);
      i +=
        parseFloat(this.props.data.dinitrogen.value) /
        parseFloat(this.props.data.dinitrogen.max);
      i +=
        parseFloat(this.props.data["carbon monoxide"].value) /
        parseFloat(this.props.data["carbon monoxide"].max);
      //i +=
      // this.props.data["nitrogen dioxide"].value / this.props.data["nitrogen dioxide"].min;

      i /= 7;
    }
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

export default DataA;
