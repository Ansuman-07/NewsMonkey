import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

    static defaultProps = {
        pageSize: 8,
        country: 'in',
        category: 'general',
        source: 'unknown'
    };

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            source: 'unknown',
            totalResults: 0
        }
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey` /* to upper case the category */
    }
    async componentDidMount() {
        this.props.progressBar(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27a281ccc0e24bcfb17f616717a11f7d&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.progressBar(50)
        let parsedData = await data.json();
        this.setState({ loading: false })
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })

        this.props.progressBar(100)
    }
    fetchMoreData = async() => {
        console.log("fetching...")
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27a281ccc0e24bcfb17f616717a11f7d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })

        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat( parsedData.articles)})

        // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        console.log(this.state.page)
        // this.setState({
        //     page: this.state.page - 1
        // })
    }
    render() {
        let { category } = this.props

        return (
            <>
            <div className="container" style={{ marginTop: "5rem" ,marginBottom:"5rem"}} >
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner />}
                >
                   { console.log(this.state.articles.length,this.state.totalResults)}
                    <div className="row" style={{width:'100%'}}>
                        <h1 className="text-center" style={{ marginBottom: "30px" }}>News Monkey | {category !== 'general' && category !== 'about' ? "Top " + category.charAt(0).toUpperCase() + category.slice(1) + " headlines" : (category === 'about' ? 'About' : "Top headlines")}</h1>

                        {this.state.articles.map((e) => {
                            /* console.log(e) */
                            return <div className="col  align-items-center g-4" style={{ marginLeft: "2.3rem" }} key={e.url}>
                                <NewsItem title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                            </div>
                        })}

                    </div>
                                        

                </InfiniteScroll>
            </div>
            </>
        )
    }
}

export default News