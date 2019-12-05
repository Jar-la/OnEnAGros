import React from "react";
import PBar from "./PBar";
import ComPBar from "./ComPBar";

class Data extends React.Component {
  constructor(props) {
    super(props);
    let diff = props.max - props.min;
    this.state = {
      critical : ((props.actual < (props.min + diff * props.seuil)) || (props.actual > (props.min + diff * props.seuil)))
    };
  }


  render() {
    return <div className='Data'>
      
      <PBar actual={4} critical = {true} />
    </div>;
  }
}

export default Data;
