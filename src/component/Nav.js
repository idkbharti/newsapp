import {useState} from "react"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../searchSlice";

export default function Nav() {
  const [incrementAmount, setIncrementAmount] = useState("");
  const dispatch = useDispatch();
  

  return (
    <header className="text-gray-500 bg-gray-200  shadow-lg fixed z-100 w-full">
     
      <nav className="md:mx-40 flex flex-wrap p-3 font-bold flex-row md:flex-row items-center text-base justify-center">
        <Link to="/world" className="ml-5 text-font-bold hover:text-gray-700">
          World
        </Link>
        <Link
          to="/politics"
          className="ml-5 text-font-bold hover:text-gray-700"
        >
          Politics
        </Link>
        <Link
          to="/business"
          className="ml-5 text-font-bold hover:text-gray-700"
        >
          Business
        </Link>
        <Link
          to="/entertainment"
          className="ml-5 text-font-bold hover:text-gray-700"
        >
          Entertainment
        </Link>
        <Link to="/science" className="ml-5 text-font-bold hover:text-gray-700">
          Science
        </Link>
        <Link to="/health" className="ml-5 text-font-bold hover:text-gray-700">
          Health
        </Link>
        <Link to="/sports" className="ml-5 text-font-bold hover:text-gray-700">
          Sports
        </Link>
        <Link
          to="/technology"
          className="ml-5 text-font-bold hover:text-gray-700"
        >
          Technology
        </Link>


        
  
  <input type="search" className="form-control relative flex-auto  block w-32 ml-2 px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" value={incrementAmount}
          onChange={e => {
            return(
              setIncrementAmount(e.target.value)
              
            )
          }}/>
        
        <Link to="/query" className="inline-block">
        <button className="btn inline-block px-3 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2"  onClick={() =>{
           return(
            dispatch(incrementByAmount(incrementAmount)))}}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
        </Link>
  
       

       
      
      

       
              
            
      </nav>
     
      <hr className="grey-3000"></hr>
    </header>
  );
}
