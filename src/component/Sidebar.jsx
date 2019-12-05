import DataS  from "./Data";
import React from "react";
class SidebarR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Sidebar">
        <DataS id ="temperature" data={this.props.data} />
        <DataS id =" " data={this.props.data} />
        <DataS data={this.props.data} />
      </div>
    );
  }
}


/*class SidebarG extends React.component {
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render(){
    return (
    
    ); 
  }
}*/
export default SidebarR;
