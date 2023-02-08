import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

    constructor(){
        super();
        console.log('Hello I am constructor');
        this.state ={
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount(){         // It runs after the render method get executed.
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=50de26580bc84f05aefa1ed37bbe3998&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=50de26580bc84f05aefa1ed37bbe3998&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }else{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=50de26580bc84f05aefa1ed37bbe3998&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
    }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NewsWorld - Top Headlines</h2>
          <div className="row">
            {this.state.articles &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    ></NewsItem>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>
            &larr; Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

// export default News
