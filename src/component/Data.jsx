import React from "react";
import PBar from "./PBar";
import ComPBar from "./ComPBar";

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className='Data'>
      
      <PBar min ={0} max={100} actual={50} seuil ={1.15} />
    </div>;
  }
}

export default Data;
