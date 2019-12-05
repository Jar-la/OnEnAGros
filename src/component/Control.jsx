import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className='Control'>
      <div className="d-flex flex-column">
        <ButtonGroup size="lg">
          <Button>waterleau</Button>
          <Button>chauffe marcel</Button>
          <Button>space deliveroo</Button>
        </ButtonGroup>
      </div>
    </div>;
  }
}

export default Control;
