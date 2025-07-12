import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
    static defaultProps = {
        country: 'us',
        pagesize: 6,
        category: 'general',
    };

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            articles: [],
            loading: false,
            total: 0,
        };
    }

    async fetchNews(page) {
        this.setState({ loading: true });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1d23e62f0e49466baf6b108d7723c496&pageSize=${this.props.pagesize}&page=${page}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            this.setState({
                articles: data.articles || [],
                total: data.totalResults || 0,
                loading: false,
                page: page,
            });
        } catch (err) {
            console.error('Failed to fetch news:', err);
            this.setState({ loading: false });
        }
    }

    componentDidMount() {
        this.fetchNews(this.state.page);
    }

    handlePrev = () => {
        if (this.state.page > 1) {
            this.fetchNews(this.state.page - 1);
        }
    };

    handleNext = () => {
        if (this.state.page < Math.ceil(this.state.total / this.props.pagesize)) {
            this.fetchNews(this.state.page + 1);
        }
    };

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">Today’s Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading &&
                        this.state.articles.map((item, ind) => (
                            <div className="col-md-4" key={ind}>
                                <NewsItem
                                    title={item.title}
                                    description={item.description}
                                    url={item.urlToImage}
                                    newsUrl={item.url}
                                />
                            </div>
                        ))}
                </div>
                <div className="d-flex justify-content-between my-3">
                    <button
                        disabled={this.state.page <= 1}
                        onClick={this.handlePrev}
                        className="btn btn-dark"
                    >
                        &larr; Prev
                    </button>
                    <button
                        disabled={
                            this.state.page >=
                            Math.ceil(this.state.total / this.props.pagesize)
                        }
                        onClick={this.handleNext}
                        className="btn btn-dark"
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}
