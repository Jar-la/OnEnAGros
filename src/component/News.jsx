import React from "react";

class News extends React.Component {
  
  render() {
    const newsValues = Object.values(this.props.data);
    console.log(newsValues);
    return (

      <div className = "News" gravité = {newsValues[2]}>
        <div id = 'NewsTitle'>
          {newsValues[0]}
        </div>
        <div id = 'NewsArticle'>
          {newsValues[1]}
        </div>
      </div>
    );
  }
}

export default News;
