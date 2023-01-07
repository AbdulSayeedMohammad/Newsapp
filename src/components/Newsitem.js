import React, { Component } from "react";

export class Newsitem extends Component {
  
  render() {
    let { title, description, imgurl,url } = this.props;
    return (
      <div className="my-3">
      <div className="card" >
        <img
          src={!imgurl?"https://www.ripplesnigeria.com/wp-content/uploads/2020/03/Latest-tech-news3.jpg":imgurl}
          className="card-img-top"
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target="_blank" className="btn btn-sm btn-secondary">
            Read more
          </a>
        </div>
      </div>
      </div>
    );
  }
}

export default Newsitem;
