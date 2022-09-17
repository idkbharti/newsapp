import {useState} from "react"
import Nav from "./component/Nav";
import News from "./component/News";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 
  return (
    <div>
      <Router>
        <Nav/>
        <LoadingBar
        height={2}
        color='#7F4AA4'
        progress={progress} 
      />
       
      <Routes>
            <Route exact path="/" element={<News key="world" apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country="in" category="world"/>}></Route>
            <Route exact path="/politics" element={<News key="politics" apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country="in" category="politics"/>}> </Route>
            <Route exact path="/business" element={<News key="business" apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country="in" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} setProgress={setProgress} pageSize={pageSize}country="in"category="entertainment"/>}></Route>
            <Route exact path="/world" element={ <News key="world" apiKey={apiKey} pageSize={pageSize} setProgress={setProgress} country="in"category="world"/>}></Route>
            <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={pageSize} setProgress={setProgress} country="in" category="health"/>}></Route>
            <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} setProgress={setProgress} country="in"category="science"/>}></Route>
            <Route exact path="/sports" element={<News key="sports" apiKey={apiKey}pageSize={pageSize} setProgress={setProgress} country="in" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News key="technology" apiKey={apiKey}  pageSize={pageSize} setProgress={setProgress} country="in"category="technology"/>}></Route>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
