import React from "react";
import {default as AlertBoot} from 'react-bootstrap/Alert' ;

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCritical: false,
      criticalList: {}
    };
  }
//sMin = min + (max-min) * 0.15
//sMax = max - (max-min) * 0.15 
  updateCritical(){
    let valDoc = Object.values(this.props.doc.data);
    let criticalList = {};
    for(let i of valDoc){
      if(i.unit === undefined){
        for(let j of Object.values(i)){
          if(this.getCriticalELement(j)){
            let key1 = Object.keys(valDoc).find(key => valDoc[key] === i);
            if(criticalList[key1] === undefined){
              criticalList[key1] = {j};
            }
          }
        }
      } else {
      }
    }
    console.log(criticalList);
  }
  getCriticalELement(element){
    const min = element.min;
    const max = element.max;
    const value = element.value;
    return ((value < (min + (max - min) * 0.15)) || (value > (max - (max - min) * 0.15)));
  }
  getBadAlert(){
    return <AlertBoot variant="danger">
      <AlertBoot.Heading>Warning! You got an issue with some ressources!</AlertBoot.Heading>
      <p>
      the differents dangerous values are:
      </p>
  </AlertBoot>;
  }

  getGoodAlert(){
    return <AlertBoot variant="success">
    <AlertBoot.Heading>Tout est ok</AlertBoot.Heading>
    <p>
      Toutes les ressources sont dans un état normale.
    </p>
  </AlertBoot>;
  }

  render() {
    this.updateCritical();
    return <div className="Alert">
      {this.props.data.isCritical? this.getBadAlert() : this.getGoodAlert()}
    </div>;
  }
}

export default Alert;
