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

  render() {
    return <div className="Alert">
      {this.getBadAlert()} 
    </div>;
  }
}

export default Alert;
