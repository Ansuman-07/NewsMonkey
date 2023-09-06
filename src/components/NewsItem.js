import React, { Component } from 'react'
import '../App.css';
export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date ,source } = this.props
        return (
            <div className="newsImg text-center media-q" style={{position:'relative'}}>
                <img src={!imageUrl ? "https://www.middleweb.com/wp-content/uploads/2017/08/breaking-news-blue-600.jpg" : imageUrl} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: "left" }}>{title ? title.slice(0, 80) : "Breaking News"}...
                    <span className="bg-danger rounded-pill text-light px-2" style={{ position:'absolute',top:-17,left:0,fontSize:'0.9rem'}}>{source}</span>
                    </h5>

                    <p className="card-text " style={{ textAlign: "left" }}>{description ? description.slice(0, 90) : `Click "Read more" to Know more about the topic`}...</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' className="btn btn-primary btn:sm pb-2">Read More</a>
                </div>
            </div >
        )
    }
}
