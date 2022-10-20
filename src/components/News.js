import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// import articles from '../../sampleOutput.json'

export class News extends Component {
  static defaultProps = {
    pageSize: 9,
    category: 'general',
    country: 'in'
  }
  static PropsTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string
  }

  articles = []
  constructor(props) {
    super(props);
    // console.log(3);
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0

    }
    document.title = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + '-ChunkNews';
  }
  

  async updateData() {
    this.props.setProgress(30);
    this.setState({ loading: true })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(60);

    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
      page: this.state.page + 1
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateData();
  }


  fetchMoreData = async () => {
    this.props.setColor('#0000FF');
    this.props.setProgress(0);
    this.setState({loading:true})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(this.articles);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults
    })
    this.props.setProgress(100);
    this.props.setColor('#FFFF00');
    this.setState({ loading: false, page: this.state.page + 1 })

  };



  render() {
    // console.log("rtn");
    return (
      <>
        <div className="container text-center " style={{marginTop:'120px'}}>
          <h2>!  Hot News in {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} !</h2>
        </div>

        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Spinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>News Loading</b>
            </p>
          }
        // below props only if you need pull down functionality

        >

          <div className="container">
            <div className="row my-4">
              {this.state.articles.map((element) => {
                // console.log(element);
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description} newsUrl={element.url} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}

            </div>
          </div>

        </InfiniteScroll>

      </>
    )
  }
}

export default News