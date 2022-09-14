import React from "react";

export default function Newsitem(props) {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
  <>
    <div className=" mt-2 max-w-sm bg-gray-100 rounded-lg border  border-gray-200 shadow-md w-80 md:w-64">
    <a >
        <img className="rounded-t-lg w-full h-32" src={!imageUrl?"https://picsum.photos/400/200":imageUrl} alt="" />
    </a>
    <div className="p-2">
        <a >
            <h5 className="mb-1 text-sm font-medium  tracking-tight text-gray-600 dark:text-white">{title}</h5>
        </a>
        <p className="mb-1 text-xs font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a href={newsUrl} className=" inline-flex items-center py-1 px-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more</a>
        <br></br>
            <span className="text-xs text-gray-500 font-thin" >{new Date(date).toGMTString()}</span>
        
    </div>
</div>
 </>
  );
}



