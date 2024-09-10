import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
// import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

  const capitalizeFirstLetter = (string) => {
    return string.slice(0).toUpperCase();
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    // console.log(parseData);
    props.setProgress(30);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    // setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  // const handlePreviousClick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
  //     setPage(page + 1);
  //   }
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    // setLoading(true);
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  return (
    <>
      <h2
        className="text-center text-danger"
        style={{ paddingTop: "1rem", marginBottom: "1rem", marginTop: "5rem" }}
      >
        NewsMonkey - {capitalizeFirstLetter(props.category)}
      </h2>
      {/* {loading && <Spiner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        // loader={<Spiner />}
      >
        <div className="container">
          <div className="row my-3">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4 my-3" key={index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 80) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 150)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-secondary"
            onClick={handlePreviousClick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-secondary"
            onClick={handleNextClick}
          >
            Next&rarr;
          </button>
        </div> */}
    </>
  );
};

//  News.defaultProps = {
//     country: "in",
//     pageSize: 10,
//     category: "science",
//   };

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
