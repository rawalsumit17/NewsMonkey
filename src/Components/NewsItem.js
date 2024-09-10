import React from 'react'

const NewsItem = (props) => {
 
  
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div>
        <div className="card">
            <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2024/05/14/550x309/Investigation-of-cyber-fraud-cases-of-over--2-50-l_1683828029815_1715688861924.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">By {author == null?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read More...</a>
            </div>
        </div>
      </div>
    )
  }

export default NewsItem