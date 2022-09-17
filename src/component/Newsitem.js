import React from "react";

export default function Newsitem(props) {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
  <>
    <div className=" mt-1 max-w-sm bg-gray-200 rounded-lg border  border-gray-200 shadow-md w-full md:w-64">
    <a >
        <img className="rounded-t-lg w-full h-44 md:h-36 " src={!imageUrl?"https://picsum.photos/400/200":imageUrl} alt="" />
    </a>
    <div className="p-2">
    <div className=" w-full h-28 md:h-24 overflow-hidden ">
        <a >
            <h5 className="mb-1 text-sm font-semibold  tracking-tight text-gray-700">{title}</h5>
        </a>
        <p className="mb-1 text-xs font-normal text-gray-700 dark:text-gray-400">{description}</p> </div>
        <a href={newsUrl} className=" inline-flex items-center py-2 px-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more</a>
        <br></br>
            <span className="text-xs text-gray-500 font-light" >{new Date(date).toGMTString()}</span>
        
   
    </div>
</div>
 </>
  );
}



