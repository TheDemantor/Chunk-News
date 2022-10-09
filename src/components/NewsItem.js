import React, { Component } from 'react'


export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, date, author, source } = this.props;

    // let d= new Date(time);
    // let day=time.getUTCDate(); 

    return (

      <div className="card my-1 mx-1 px-1">
        <div style={{display: 'flex', position: 'absolute',right: '0'}}>
          <span className="badge rounded-pill bg-primary" >
            {source}
          </span>
        </div>
        <img src={imageUrl ? imageUrl : "https://images.livemint.com/img/2022/09/05/600x338/India_services_1662354519171_1662354519311_1662354519311.jpg"} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} at {new Date(date).toLocaleDateString()}</small></p>
          <a href={newsUrl} target="__blank" className="btn btn-warning btn-sm">Read More</a>
        </div>
      </div >

    )
  }
}

export default NewsItem