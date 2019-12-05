import React from "react";
import {default as AlertBoot} from 'react-bootstrap/Alert' ;

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  updateCritical(){
    console.log(this.props.data);
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
    <AlertBoot.Heading>Everything is ok</AlertBoot.Heading>
    <p>
      All the ressources are in good situations
    </p>
  </AlertBoot>;
  }

  render() {
    this.updateCritical();
    return <div className="Alert">
      {this.props.data.isCritical? this.getBadAlert(this.props.data.criticalData) : this.getGoodAlert()}
    </div>;
  }
}

export default Alert;
