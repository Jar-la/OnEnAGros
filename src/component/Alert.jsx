import React from "react";
import { default as AlertBoot } from "react-bootstrap/Alert";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.isCritical = false;
  }
//sMin = min + (max-min) * 0.15
//sMax = max - (max-min) * 0.15 
  updateCritical(){
    let valDoc = Object.values(this.props.doc.data);
    for(let a of valDoc){
      if(a.unit === undefined){
        for(let b of Object.values(a)){
          if(this.getCriticalELement(b)){
            this.isCritical = true;
          }
        }
      } else {
        if(this.getCriticalELement(a)){
          this.isCritical = true;
        }
      }
  }
  }
  getCriticalELement(element){
    const min = parseFloat(element.min);
    const max = parseFloat(element.max);
    const value = parseFloat(element.value);
    return ((value < (min + (max - min) * 0.15)) || (value > (max - (max - min) * 0.15)));
  }
  getBadAlert(){
    return <AlertBoot variant="danger">
      <AlertBoot.Heading>Attention! Problème de ressources!</AlertBoot.Heading>
      <p>
        Certaines ressources sont dans un état critique!
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
      {this.isCritical? this.getBadAlert() : this.getGoodAlert()}
    </div>;
  }
}

export default Alert;
