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
export default function App(){
  return(
    <>
      
      <BrowserRouter>
      <Routes>
        <Route className="routes" path="/" element={ <Navbar /> }>
          <Route index element={<Home />} />
          <Route path="css/*" element={<>< Cssnavbar/> <Appcss /></>} />
          <Route path="html" element={<Htmlpage />} />
          <Route path="java/*" element={<><Jnavbar/><AppJava/> </>} />
          <Route path="react" element={<Reactpage />} />
          {/* <Route path="*" element={<NoPage />} /> */}

         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}