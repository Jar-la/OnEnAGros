import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import fetch from "node-fetch";

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  waterleau(){
    fetch("http://localhost:8080/waterleau", {
        method: "get",
        headers: { "Content-Type": "application/json" }
      }).then(res => console.log(res));
  }

  chauffe_marcel(){
    fetch("http://localhost:8080/chauffe_marcel", {
        method: "get",
        headers: { "Content-Type": "application/json" }
      }).then(res => console.log(res));
  }

  space_deliveroo(){
    fetch("http://localhost:8080/space_deliveroo", {
        method: "get",
        headers: { "Content-Type": "application/json" }
      }).then(res => console.log(res));
  }

  render() {
    return <div className='Control'>
      <div className="d-flex flex-column">
        <ButtonGroup size="lg">
          <Button onClick={this.waterleau}>waterleau</Button>
          <Button onClick={this.chauffe_marcel}>chauffe marcel</Button>
          <Button onClick={this.space_deliveroo}>space deliveroo</Button>
        </ButtonGroup>
      </div>
    </div>;
  }
}

export default Control;
