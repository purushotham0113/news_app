import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export default class News extends Component {
    static defaultProps = {
        country: 'us',
        pagesize: 6,
        catagory: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        catagory: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            articles: [],
            loading: false

        }
    }
    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&catagory=${this.props.catagory}&apiKey=1d23e62f0e49466baf6b108d7723c496&pagesize=${this.props.pagesize}&page=${this.state.page}`;
        this.setState({ loading: true })
        console.log(this.props.pagesize)
        // let url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=1d23e62f0e49466baf6b108d7723c496"

        let data = await fetch(url);
        data = await data.json();


        this.setState({
            articles: data.articles,
            total: data.totalResults,
            loading: false

        })

    }
    handlePrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&catagory=${this.props.catagory}&apiKey=1d23e62f0e49466baf6b108d7723c496&pageSize=${this.props.pagesize}&page=${this.state.page - 1}`;
        this.setState({ loading: true })
        console.log("prev")
        console.log(this.props.pagesize)
        // let url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=1d23e62f0e49466baf6b108d7723c496"
        let data = await fetch(url);
        data = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: data.articles,
            loading: false

        })

    }
    handleNext = async () => {
        let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&catagory=${this.props.catagory}&apiKey=1d23e62f0e49466baf6b108d7723c496&pageSize=${this.props.pagesize}&page=${this.state.page + 1}`;
        this.setState({ loading: true })
        // let url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=1d23e62f0e49466baf6b108d7723c496"
        // url = ""
        console.log("next")
        console.log(this.props.pagesize)
        console.log(url);
        let data = await fetch(url)
        data = await data.json();
        this.setState({

            page: this.state.page + 1,
            articles: data.articles,
            loading: false

        })
    }
    render() {

        return (
            <div className='container my-3'>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    <h2 className="text-center"  > Todays Top Headlines</h2>
                    {
                        !this.state.loading && this.state.articles.map((item, ind) => {
                            return (
                                <div className='col-md-4' key={ind}>
                                    <NewsItem title={item.title} description={item.description} url={item.urlToImage} newsUrl={item.url} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} onClick={this.handlePrev} type="button" className="btn btn-dark">&larr; Prev</button>
                    <button disabled={this.state.page > Math.floor(this.state.total / this.props.pagesize)} type="button" onClick={this.handleNext} className="btn btn-dark">Next &rarr; </button>
                </div>
            </div>
        )
    }
}


