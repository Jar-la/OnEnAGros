import React from "react";

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className='Control'>
      <button className='ControleCenterButton'>Eau</button>
      <button className='ControleCenterButton'>Air</button>
      <button className='ControleCenterButton'>Nourriture</button>
    </div>;
  }
}

export default Control;
