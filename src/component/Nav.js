import {Link} from "react-router-dom"
export default function Nav() {
  return(
    <header className="text-gray-500 bg-gray-200  shadow-lg fixed z-100 w-full">
    {/* <div className="container flex flex-wrap p-5 font-bold flex-col md:flex-row items-center"> */}
      {/* <Link to="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       
        <span className="text-3xl text-gray-500"></span></Link> */}
      
      <nav className="md:mx-40 flex flex-wrap  p-5 font-bold flex-row md:flex-row items-center text-base justify-center">
        <Link to="/world" className="ml-5 text-font-bold hover:text-gray-700">World</Link>
        <Link to="/politics" className="ml-5 text-font-bold hover:text-gray-700">Politics</Link >
        <Link to="/business" className="ml-5 text-font-bold hover:text-gray-700">Business</Link >
        <Link to="/entertainment" className="ml-5 text-font-bold hover:text-gray-700">Entertainment</Link >
        <Link to="/science" className="ml-5 text-font-bold hover:text-gray-700">Science</Link >
        <Link to="/health" className="ml-5 text-font-bold hover:text-gray-700">Health</Link >
        <Link to="/sports" className="ml-5 text-font-bold hover:text-gray-700">Sports</Link >
        <Link to="/technology" className="ml-5 text-font-bold hover:text-gray-700">Technology</Link >
      </nav>
  {/* </div> */}
    <hr className="grey-3000" ></hr>
  
  </header>
  ) }
    

