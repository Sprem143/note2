import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./mainpage/Home";
import Navbar from "./mainpage/Navbar";
import AppJava from './pages/java/Appjava';
import Appcss from './pages/css/Appcss';
import Apppython from './pages/python/Apppython';
import Apphtml from './pages/html/Apphtml';
import Appreact from './pages/react/Appreact';
import Appjs from './pages/js/Appjs';
export default function App(){
  function changeTheme() {
    let colore = document.getElementById("exampleColorInput").value;
document.getElementById("root").style.backgroundColor= colore  }

function changetext(){
  let colore = document.getElementById("exampleColorInput2").value;
document.getElementById("root").style.color= colore  }
  return(
    <>
      <div className="toolbar">
      <div className="theme">
          <span>Theme</span>
          <input
            type="color"
            onInput={changeTheme}
            className="form-control form-control-color themeapp"
            id="exampleColorInput"
            value="#FF0000"
            title="Choose your "
          ></input>
        </div>
        <div className="theme theme2">
          <span>Text-color</span>
          <input
            type="color"
            onInput={changetext}
            className="form-control form-control-color themeapp"
            id="exampleColorInput2"
            value="#FFC0CB"
            title="Choose your "
          ></input>
        </div>
      </div>
     

      <BrowserRouter>
      <Routes>
      <Route className="routes" path="/" element={ <Navbar /> }>
          <Route index element={<Home />} />
          <Route path="python/*" element={<><Apppython /></>} />
          <Route path="css/*" element={<><Appcss /> </>} />
          <Route path="html/*" element={<><Apphtml/> </>} />
          <Route path="java/*" element={<><AppJava/></>} />
          <Route path="react/*" element={<><Appreact/></>} />
          <Route path="javascript/*" element={<><Appjs/></>} />
          {/* <Route path="*" element={<NoPage />} /> */}

         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}