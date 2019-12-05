import React from "react";

class Date extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    const dateValues = Object.values(this.props.data.date);
    console.log(dateValues);
    dateValues.splice(4,1);
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
