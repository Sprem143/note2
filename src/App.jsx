import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./mainpage/Home";
import Navbar from "./mainpage/Navbar";
import AppJava from './pages/java/Appjava';
import Cssnavbar from './pages/css/Cssnavbar';
import Appcss from './pages/css/Appcss';
import Apppython from './pages/python/Apppython';
import JavaHome from './pages/java/JavaHome';
import PythonHome from './pages/python/PythonHome';
import Apphtml from './pages/html/Apphtml';
import HtmlHome from './pages/html/HtmlHome';
import ReactHome from './pages/react/ReactHome';
import Appreact from './pages/react/Appreact';
export default function App(){
  return(
    <>
      
      <BrowserRouter>
      <Routes>
        <Route className="routes" path="/" element={ <Navbar /> }>
          <Route index element={<Home />} />
          <Route path="python/*" element={<>< PythonHome/> <Apppython /></>} />
          <Route path="css/*" element={<>< Cssnavbar/> <Appcss /></>} />
          <Route path="html/*" element={<><Apphtml/><HtmlHome/> </>} />
          <Route path="java/*" element={<><AppJava/><JavaHome/> </>} />
          <Route path="react/*" element={<><Appreact /><ReactHome/></>} />
          {/* <Route path="*" element={<NoPage />} /> */}

         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}