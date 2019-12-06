import React from "react";
import PBar from "./PBar";
import ComPBar from "./ComPBar";

class DataS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className='Data'>
      
      <PBar min ={this.props.min} max={this.props.max} actual={90} seuil ={0.15} />
    </div>;
  }
}

export default DataS;
