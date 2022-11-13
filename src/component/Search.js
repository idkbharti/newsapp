import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchQuery } from "../searchSlice";
import { BsSearch } from "react-icons/bs";
import {CgProfile} from "react-icons/cg"

export const Search = () => {
  const [query, setQuery] = useState("");
  const [inputSearch, setInputSearch] = useState(false);
  const dispatch = useDispatch();

  function handleVisiblity(){
setInputSearch(true)
const hide=function(){setInputSearch(false)}
setTimeout(hide,10000)
  }
  return (
    <>
    {inputSearch ? <button className="flex flex-row fixed top-[14px] right-10  z-[1000] items-center"
          onClick={() =>{
            return(
             dispatch(searchQuery(query)))}}
          
        > 
        <input
        type="search"
        className="form-control relative flex-auto  block w-32 ml-2 px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
        value={query}
        onChange={(e) => {
          return setQuery(e.target.value);
        }}
      />
          <Link to="/query"> <BsSearch className="bg-yellow-600 mx-2 p-2  rounded-full" size={35} /></Link>
        </button> 
        :
        <BsSearch onClick={handleVisiblity} className="bg-yellow-600 mx-2 p-2  rounded-full fixed top-[14px] right-10 z-[1000]" size={35} />
        }
        <CgProfile className="bg-yellow-600 mx-2 p-2  rounded-full fixed top-[14px] right-0 z-[1000]" size={35} />
      
       



       
    
    </>
  );
};


