import React from "react";

class Date extends React.Component {

  searchIndex(dateValues){
    for (let i of dateValues) {
      if (typeof i === "object") {
        return dateValues.indexOf(i);
      }
    }
  }
  render() {
    const dateValues = Object.values(this.props.data.date);
    dateValues.splice(this.searchIndex(dateValues), 1);
    
    return (
      <div>
        <p>
        {dateValues.map((val, ind)=> {
        return (<span className={`span ${ind}`} key={ind}>{val} </span>);
        })}
        </p>      
      </div>
    );
  }
}

export default Date;
