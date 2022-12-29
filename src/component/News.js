import React, { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loding"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";


export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.search.value);
  console.log(res);
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 
const updateNews = async () => {
  props.setProgress(10); 
  var url=""
 if(res.length>1){
  url = `https://newsdata.io/api/1/news?apikey=pub_11003a576988a04b3c133df65a8fd509b202d&&q=${res}&page=${page}`;

 }else{
   url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=${props.country}&page=${page}&category=${props.category}`;
 }
  setLoading(true);
  let data = await fetch(url);
  props.setProgress(30);
  let parsedData = await data.json();
  props.setProgress(70);
  setArticles(parsedData.results);
  setTotalResults(parsedData.totalResults);
  setLoading(false);
  props.setProgress(100);
  console.log(url)
};

 

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewZy`;
    updateNews(); 
  },[res]);

  const fetchMoreData = async () => {   
    
    var url=""
    if(res.length>1){
     url = `https://newsdata.io/api/1/news?apikey=pub_11003a576988a04b3c133df65a8fd509b202d&&q=${res}&page=${page}`;
   
    }else{
      url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=${props.country}&page=${page}&category=${props.category}`;
    }
    setPage(page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.results))
    setTotalResults(parsedData.totalResults)
    console.log("hi helo.....")
  };

  return (
    <>
    
    <div className="bg-gray-50">
    <h1 className="text-center font-bold pt-5 sm:pt-20 text-2xl text-gray-500 mx-auto">Top {capitalizeFirstLetter(props.category)} Headlines</h1> 
     {loading && <Loading/>}
      <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<h6 className="text-center">loading...</h6>}
                > 
    
  <div className="flex flex-wrap justify-center p-2 gap-4 md:mx-10 mt-4">
      {!loading && articles.map((elements, id) => {
          return (
            <div key={id}>
              <Card
                title={elements.title}
                imageUrl={elements.image_url}
                description={elements.description ? elements.description :elements.title}
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
