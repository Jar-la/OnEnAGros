import React from "react";
import { default as AlertBoot } from "react-bootstrap/Alert";

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
    for(let a of valDoc){
      if(a.unit === undefined){
        for(let b of Object.values(a)){
          if(this.getCriticalELement(b)){
            this.state.isCritical = true;
          }
        }
      } else {
        if(this.getCriticalELement(a)){
          this.state.isCritical = true;
        }
      }
  }
  }
  getCriticalELement(element){
    const min = element.min;
    const max = element.max;
    const value = element.value;
    console.log(element);
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
<<<<<<< HEAD
    return (
      <div className='Alert'>
        {this.props.data.isCritical
          ? this.getBadAlert(this.props.data.criticalData)
          : this.getGoodAlert()}
      </div>
    );
=======
    return <div className="Alert">
      {this.props.data.isCritical? this.getBadAlert() : this.getGoodAlert()}
    </div>;
>>>>>>> dd370ee6e9bc847dfad31e6d9aeaffed0dca35cd
  }
}

export default Alert;
