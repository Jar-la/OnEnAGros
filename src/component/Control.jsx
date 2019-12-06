import React from "react";
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
      <div>
          <Button id= "to" className = "buttonA" variant="outline-success" onClick={this.waterleau}>waterleau</Button>
          <Button id ="to2"className ="buttonA" variant="outline-success" onClick={this.chauffe_marcel}>chauffe marcel</Button>
          <Button id ="to3" className="buttonA" variant="outline-success" onClick={this.space_deliveroo}>space deliveroo</Button>
      </div>
    </div>;
  }
}

export default Control;
