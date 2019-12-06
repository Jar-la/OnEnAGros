import React from "react";

class News extends React.Component {
  
  render() {
    const newsValues = Object.values(this.props.data);
    return (<div className='News'>
      {newsValues.map((val, idx)=>{
        return (
          <span className={`span ${idx}`} key={idx}>
            {val}
            <br />
          </span>
        );
      })}
    </div>);
  }
}

export default News;
