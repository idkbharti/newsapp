import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Loading from "./Loding"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 
const updateNews = async () => {
    
  const url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=${props.country}&page=${page}&category=${props.category}`;
  setLoading(true);
  let data = await fetch(url);
  let parsedData = await data.json();
setArticles(parsedData.results);
  setTotalResults(parsedData.totalResults);
  setLoading(false);
  console.log(props.category,parsedData.length,url,page,)
};

 

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewZy`;
    updateNews(); 
  },[]);

  const fetchMoreData = async () => {   
    
    const url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=${props.country}&page=${page}&category=${props.category}`;
    setPage(page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.results))
    setTotalResults(parsedData.totalResults)
  };

  return (
    <>
    <div className="bg-gray-50 pt-32 md:pt-20 md:px-40">
    <h1 className="text-center font-bold text-2xl text-gray-500 mx-auto">Top {capitalizeFirstLetter(props.category)} Headlines</h1> 
     {loading && <Loading/>}
      <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<h1>...</h1>}
                > 
    
  <div className="flex flex-wrap justify-center gap-5 px-3 mt-4">
      {!loading && articles.map((elements, id) => {
          return (
            <div key={id}>
              <Newsitem
                title={elements.title}
                imageUrl={elements.image_url}
                description={elements.description ? elements.description.slice(0,180) :elements.title.slice(0,180)}
                newsUrl={elements.link}
                author={elements.source_id}
                date={elements.pubDate}
                />
            </div>
          );
        })}  
        </div>
 </InfiniteScroll>
 </div>

      </>
  );
}
   
      
News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'world',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
