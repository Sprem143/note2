import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./mainpage/Home";
import Navbar from "./mainpage/Navbar";
import Htmlpage from "./pages/html/Htmlpage";
import Reactpage from "./pages/react/Basicreact";
import Jnavbar from './pages/java/Jnavbar';
import AppJava from './pages/java/Appjava';
import Cssnavbar from './pages/css/Cssnavbar';
import Appcss from './pages/css/Appcss';
import Pynavbar from './pages/python/pynavbar';
import Apppython from './pages/python/Apppython';
import JavaHome from './pages/java/JavaHome';
import PythonHome from './pages/python/PythonHome';
export default function App(){
  return(
    <>
      
      <BrowserRouter>
      <Routes>
        <Route className="routes" path="/" element={ <Navbar /> }>
          <Route index element={<Home />} />
          <Route path="python/*" element={<>< PythonHome/> <Apppython /></>} />
          <Route path="css/*" element={<>< Cssnavbar/> <Appcss /></>} />
          <Route path="html" element={<Htmlpage />} />
          <Route path="java/*" element={<><AppJava/><JavaHome/> </>} />
          <Route path="react" element={<Reactpage />} />
          {/* <Route path="*" element={<NoPage />} /> */}

         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}