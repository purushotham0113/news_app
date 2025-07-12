import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 6,
        category: 'general',
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            articles: [],
            total: 0,
            loading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchNews(this.state.page);
    }

    fetchNews = async (page) => {
        this.setState({ loading: true, error: null });

        try {
            const res = await fetch(
                `https://news-app-backend-5mqf.onrender.com/news?category=${this.props.category}&page=${page}`
            );

            if (!res.ok) throw new Error('API response not OK');

            const data = await res.json();

            this.setState({
                articles: data.articles || [],
                total: data.totalResults || 0,
                loading: false,
                page: page,
            });
        } catch (err) {
            console.error('Error fetching news:', err);
            this.setState({ loading: false, error: 'Failed to load news 😞' });
        }
    };

    handlePrev = () => {
        if (this.state.page > 1) {
            this.fetchNews(this.state.page - 1);
        }
    };

    handleNext = () => {
        if (this.state.page < Math.ceil(this.state.total / this.props.pageSize)) {
            this.fetchNews(this.state.page + 1);
        }
    };

    render() {
        const { articles, loading, page, total, error } = this.state;
        const { pageSize } = this.props;

        return (
            <div className="container my-4">
                <h2 className="text-center mb-4">
                    📰 Todays Top Headlines
                </h2>

                {loading && <Spinner />}

                {!loading && error && (
                    <div className="alert alert-danger text-center">{error}</div>
                )}

                {!loading && !error && articles.length === 0 && (
                    <div className="alert alert-warning text-center">No news found.</div>
                )}

                <div className="row">
                    {!loading &&
                        articles.map((item, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <NewsItem
                                    title={item.title}
                                    description={item.description}
                                    url={item.urlToImage}
                                    newsUrl={item.url}
                                />
                            </div>
                        ))}
                </div>

                {!loading && !error && (
                    <div className="d-flex justify-content-between mt-4">
                        <button
                            className="btn btn-dark"
                            disabled={page <= 1}
                            onClick={this.handlePrev}
                        >
                            &larr; Prev
                        </button>

                        <button
                            className="btn btn-dark"
                            disabled={page >= Math.ceil(total / pageSize)}
                            onClick={this.handleNext}
                        >
                            Next &rarr;
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
