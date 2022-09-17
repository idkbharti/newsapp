import React from "react";

export default function Newsitem(props) {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
  <>
    <div className=" mt-1 max-w-sm bg-gray-200 rounded-lg border  border-gray-200 shadow-md w-full md:w-64">
    <a >
        <img className="rounded-t-lg w-full h-44 md:h-36 " src={!imageUrl?"https://picsum.photos/400/200":imageUrl} alt="" />
    </a>
    <div className="md:p- p-2">
    <div className=" w-full h-28  overflow-hidden ">
        <a >
            <h5 className=" md:text-sm font-semibold md:font-medium  text-base tracking-tight text-gray-700">{title}</h5>
        </a>
        <p className="mt-1 md:text-xs font-medium text-sm md:font-normal text-gray-700">{description}</p> </div>
        
        <a href={newsUrl} className=" inline-flex items-center md:p-1 p-2 text-xs font-normal text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read More</a>
        <br></br>
            <span className="text-xs text-gray-600 font-light" >{new Date(date).toGMTString()}</span>
        
   
    </div>
</div>
 </>
  );
}



