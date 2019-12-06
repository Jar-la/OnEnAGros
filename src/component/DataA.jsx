import React from "react";
import PBar from "./PBar";

class DataA extends React.Component {
  moye() {
    let i = 0;
    console.log(i);
    if (this.props.data["carbon dioxide"].value!== NaN) {
        console.log(parseFloat(this.props.data["carbon dioxide"].value));
      i =i +
        parseFloat(this.props.data["carbon dioxide"].value) /
          parseFloat(this.props.data["carbon dioxide"].min);
      console.log(i);
      i +=
        parseFloat(this.props.data["legionelle pneumophila"].value) /
        parseFloat(this.props.data["legionelle pneumophila"].min);
      i +=
        parseFloat(this.props.data["sulphur dioxide"].value) /
        parseFloat(this.props.data["sulphur dioxide"].min);
      i +=
        parseFloat(this.props.data.dioxygene.value) /
        parseFloat(this.props.data.dioxygene.min);
      i +=
        parseFloat(this.props.data.dinitrogen.value) /
        parseFloat(this.props.data.dinitrogen.min);
      i +=
        parseFloat(this.props.data["carbon monoxide"].value) /
        parseFloat(this.props.data["carbon monoxide"].min);
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
