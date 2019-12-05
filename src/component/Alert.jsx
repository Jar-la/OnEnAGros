import React from "react";
import {default as AlertBoot} from 'react-bootstrap/Alert' ;

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCritical: false
    };
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
    return <Alert variant="success">
    <Alert.Heading>Everything is ok</Alert.Heading>
    <p>
      All the ressources are in good situations
    </p>
  </Alert>;
  }

  render() {
    return <div className="Alert">
      {this.isCritical? this.getBadAlert() : this.getGoodAlert()} 
    </div>;
  }
}

export default Alert;
