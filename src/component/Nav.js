import {Link} from "react-router-dom"
export default function Nav() {
  return(
    <header className="text-gray-500 bg-gray-100 body-font fixed z-100 w-full">
    <div className="container mx-auto flex flex-wrap p-3 text- font-bold flex-col md:flex-row items-center">
      <Link to="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       
        <span className="text-3xl text-gray-500">NEWZY</span></Link>
      
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link to="/world" className="mr-5 text-font-bold hover:text-gray-300">World</Link>
        <Link to="/politics" className="mr-5 text-font-bold hover:text-gray-300">Politics</Link >
        <Link to="/business" className="mr-5 text-font-bold hover:text-gray-300">Business</Link >
        <Link to="/entertainment" className="mr-5 text-font-bold hover:text-gray-300">Entertainment</Link >
        <Link to="/science" className="mr-5 text-font-bold hover:text-gray-300">Science</Link >
        <Link to="/health" className="mr-5 text-font-bold hover:text-gray-300">Health</Link >
        <Link to="/sports" className="mr-5 text-font-bold hover:text-gray-300">Sports</Link >
        <Link to="/technology" className="mr-5 text-font-bold hover:text-gray-300">Technology</Link >
      </nav>
  </div>
    <hr className="grey-3000" ></hr>
  
  </header>
  ) }
    

