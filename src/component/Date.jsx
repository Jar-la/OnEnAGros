import React from "react";

class Date extends React.Component {
  constructor(props) {
    super(props);
    
  }

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
        {dateValues.map((val, ind)=> {
        return (
          <h3 className="dateText" key={ind}>
            {val}
          </h3>
        );
        })}
      </div>
    );
  }
}

export default Date;
