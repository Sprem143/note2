import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./mainpage/Home";
import Navbar from "./mainpage/Navbar";
import AppJava from './pages/java/Appjava';
import Appcss from './pages/css/Appcss';
import Apppython from './pages/python/Apppython';
import Apphtml from './pages/html/Apphtml';
import Appreact from './pages/react/Appreact';
import Appjs from './pages/js/Appjs';
import Nopage from './mainpage/Nopage';
export default function App(){
  function changeTheme() {
    let colore = document.getElementById("exampleColorInput").value;
document.getElementById("root").style.backgroundColor= colore  }

function changetext(){
  let colore = document.getElementById("exampleColorInput2").value;
document.getElementById("root").style.color= colore  }

const[v, setImage]= useState(0);
const[image,setImg]=useState("static/images/arrows-fullscreen.svg")
// let image="static/images/java-logo.png"
 const handleImage=()=>{
  console.log(v);
  if(v==0){
    setImg("static/images/fullscreen-exit.svg");
    document.getElementById("topicicon").style.visibility="hidden"
    document.getElementById("fsm").style.marginLeft="35px !important";
    document.getElementById("main-nav").style.visibility="hidden !important";
    document.getElementsByClassName("nav2")[0].style.marginTop="-220px"
    document.getElementsByClassName("toolbar")[0].style.backgroundColor="midnightblue";

    setImage(1)
  }else{
    setImg("static/images/arrows-fullscreen.svg")
    document.getElementById("topicicon").style.visibility="visible"
    document.getElementById("fsm").style.marginLeft="60px";
    document.getElementById("main-nav").style.visibility="visible"
    document.getElementsByClassName("nav2")[0].style.marginTop="-140px"
    document.getElementsByClassName("toolbar")[0].style.backgroundColor="unset"

    setImage(0)
  }
}
  return(
    <>
      <div className="toolbar">
      <div className="theme">
          <span>Theme-</span>
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
        {/* -----full view----- */}
        <div className='text-white readmode-text'><p>Full-Screen</p></div>
        <div id='readmode' onClick={handleImage}>
          
          <img src={image} alt="" height='90%'/>
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
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}