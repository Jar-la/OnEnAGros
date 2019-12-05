import React from "react";
import Board from '../component/Board';

export default class Home extends React.Component {

  render(){
    return (
      <Board data={this.props.data}/>
    );
  }
  
}