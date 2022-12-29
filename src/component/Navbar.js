import { Link } from "react-router-dom";
import {useState} from "react"
import {GiWorld,GiMaterialsScience} from "react-icons/gi"
import {HiOutlineFlag} from "react-icons/hi"
import {BiBuildings,BiMoviePlay} from "react-icons/bi"
import {MdOutlineBiotech,MdSportsSoccer,MdOutlineHealthAndSafety} from "react-icons/md"


export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);
const size =25;

  
return (
    <>

<header className=" bg-gray-900 text-white shadow-lg fixed z-100 w-full">
      <nav className="hidden sm:flex sm:flex-wrap sm:p-3 sm:font-bold sm:flex-row sm:items-center sm:text-base sm:justify-center">
        <Link to="/world" 
        className="ml-2 text-font-bold p-1 rounded-md  hover:bg-violet-500  focus-within:bg-violet-700">
          World
        </Link>
        <Link
          to="/politics" 
          className="ml-2 text-font-bold p-1 rounded-md hover:bg-violet-500  focus-within:bg-violet-700"
        >
          Politics
        </Link>
        <Link
          to="/business"
          className="ml-2 text-font-bold p-1 rounded-md hover:bg-violet-500  focus-within:bg-violet-700"
        >
          Business
        </Link>
        <Link
          to="/entertainment"
          className="ml-2 text-font-bold p-1 rounded-md hover:bg-violet-500  focus-within:bg-violet-700"
        >
          Entertainment
          
        </Link>
        <Link to="/science" className="ml-2 p-1 rounded-md text-font-bold  hover:bg-violet-500  focus-within:bg-violet-700">
          Science
        </Link>
        <Link to="/health" className="ml-2 p-1 rounded-md text-font-bold  hover:bg-violet-500  focus-within:bg-violet-700">
          Health
        </Link>
        <Link to="/sports" className="ml-2 p-1 rounded-md text-font-bold  hover:bg-violet-500  focus-within:bg-violet-70">
          Sports
        </Link>
        <Link
          to="/technology"
          className="ml-2 text-font-bold p-1 rounded-md hover:bg-violet-500  focus-within:bg-violet-70"
        >
          Technology
        </Link>
      </nav>
    </header>

    


    <header className=" bg-white text-purple-500 fixed z-100 w-full bottom-0 "><hr></hr>
      <nav className="md:hidden w-full flex py-4 font-bold flex-row items-center text-base justify-center overflow-scroll overflow-x-auto">
        <Link to="/world" className="focus-within:text-white focus-within:bg-violet-500 focus-within:p-1 focus-within:rounded-lg" 
        onClick={()=>setIsHovering(false)}>
        
          {isHovering?<p>world</p>:""}
          <GiWorld size={size}/>
        </Link>
        <Link
          to="/politics"
          className="ml-5 focus-within:text-white focus-within:bg-violet-500 focus-within:p-1 focus-within:rounded-lg" 
        >
          {/* Politics */}
          <HiOutlineFlag size={size}/>
        </Link>
        <Link
          to="/business"
          className="ml-5 focus-within:text-white focus-within:bg-violet-500 focus-within:p-1 focus-within:rounded-lg" 
          
        >
          {/* Business */}
          <BiBuildings size={size}/>
        </Link>
        <Link
          to="/entertainment"
          className="ml-5 focus-within:text-white focus-within:bg-violet-500 focus-within:p-1 focus-within:rounded-lg" 
        >
          {/* Entertainment */}
          <BiMoviePlay size={size}/>
        </Link>
        <Link to="/science" className="ml-5 focus-within:text-white focus-within:bg-violet-500 focus-within:p-1 focus-within:rounded-lg">
          {/* Science */}
          <GiMaterialsScience size={size}/>
        </Link>
        <Link to="/health" className="ml-5 focus-within:text-white focus-within:bg-violet-500 focus-within:p-1 focus-within:rounded-lg">
          {/* Health */}
          <MdOutlineHealthAndSafety size={size}/>
        </Link>
        <Link to="/sports" className="ml-5 focus-within:text-white focus-within:bg-violet-500 focus-within:p-1 focus-within:rounded-lg">
          {/* Sports */}
          <MdSportsSoccer size={size}/>
        </Link>
        <Link
          to="/technology"
          className="ml-5 focus-within:text-white focus-within:bg-violet-500 focus-within:p-1 focus-within:rounded-lg"
        >
          {/* Technology */}
          <MdOutlineBiotech size={size}/>
        </Link>
      </nav>
    </header>


</>
  );
}
