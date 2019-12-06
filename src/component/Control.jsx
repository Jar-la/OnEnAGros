import React from "react";
import Button from 'react-bootstrap/Button';
import fetch from "node-fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faSun, faUtensils} from "@fortawesome/free-solid-svg-icons";

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
    return (
      <div className="Control">
        <div>
          <Button
            id="to"
            className="buttonA"
            variant="outline-success"
            onClick={this.waterleau}
          >
            <FontAwesomeIcon icon={faTint} />
            <span>waterleau</span>
          </Button>
          <Button
            id="to2"
            className="buttonA"
            variant="outline-success"
            onClick={this.chauffe_marcel}
          >
            <FontAwesomeIcon icon={faSun} />
            <span>chauffe marcel</span>
          </Button>
          <Button
            id="to3"
            className="buttonA"
            variant="outline-success"
            onClick={this.space_deliveroo}
          >
            <FontAwesomeIcon icon={faUtensils} />
            <span>space deliveroo</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default Control;
