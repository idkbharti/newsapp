import React from "react";

export default function Newsitem(props) {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
  <>
    <div className=" mt-2 max-w-sm bg-gray-100 rounded-lg border  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a >
        <img className="rounded-t-lg w-full h-52 " src={!imageUrl?"https://picsum.photos/400/200":imageUrl} alt="" />
    </a>
    <div className="p-2">
        <a >
            <h5 className="mb-1 text-1xl font-bold tracking-tight text-gray-600 dark:text-white">{title}</h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a href={newsUrl} className=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
        <br></br>
            <span className="text-xs text-gray-500 " >By {!author?"unknown":author} on 12 {new Date(date).toGMTString()}</span>
        
    </div>
</div>
 </>
  );
}



