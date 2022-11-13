import React from "react";
import Loading  from "./Loding"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";

function NewsQuery() {
 
  const res = useSelector((state) => state.search.value);
  console.log(res);

  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const updateNews = async () => {
    const url = `https://newsdata.io/api/1/news?apikey=pub_11003a576988a04b3c133df65a8fd509b202d&&q=${res}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);

    let parsedData = await data.json();

    setArticles(parsedData.results);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    console.log(url,articles);
  };

  useEffect(() => {
    updateNews();
  }, [res]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsdata.io/api/1/news?apikey=pub_11003a576988a04b3c133df65a8fd509b202d&&q=${res}&page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.results));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div>
      <div className="bg-gray-50">
        <h1 className="text-center font-bold pt-5 sm:pt-20 text-2xl text-gray-500 mx-auto">
          "{res}" Result
        </h1>
       
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h6 className="text-center">loading...</h6>}
        >
          <div className="flex flex-wrap justify-center md:gap-4 p-2 md:mx-40 mt-4">
            {!loading &&
              articles.map((elements, id) => {
                return (
                  <div key={id}>
                    <Newsitem
                      title={elements.title}
                      imageUrl={elements.image_url}
                      description={
                        elements.description
                          ? elements.description
                          : elements.title
                      }
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
    </div>
  );
}

export default NewsQuery;
