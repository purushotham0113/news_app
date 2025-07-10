import React, { Component } from 'react'

export default class NewsItem extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props.title);
    // }

    render() {
        let { title, description, url, newsUrl } = this.props;
        return (
            <div className="card" style={{ width: '18rem' }}> 
          
                <img src={url} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} className="btn btn-info">Read More</a>
                </div>
            </div>

        )
    }
}
