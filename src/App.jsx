import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './mainpage/Profile';
import PrivateComponent from './mainpage/PrivateComponent';
import Home from "./mainpage/Home";
import Navbar from "./mainpage/Navbar";
import AppJava from './pages/java/Appjava';
import Appcss from './pages/css/Appcss';
import Apppython from './pages/python/Apppython';
import Apphtml from './pages/html/Apphtml';
import Appreact from './pages/react/Appreact';
import Appjs from './pages/js/Appjs';
import Nopage from './mainpage/Nopage';
import Signin from './mainpage/Signin';
import Signup from './mainpage/Signup';
import Chatbot from './mainpage/Chatbot';
export default function App(){
  function changeTheme() {
    let colore = document.getElementById("exampleColorInput").value;
document.getElementById("root").style.backgroundColor= colore  }

function changetext(){
  let colore = document.getElementById("exampleColorInput2").value;
document.getElementById("root").style.color= colore  }

const[v, setImage]= useState(0);
// const [noteTitle,setNoteTitle]=useState('')
// const [note,setNote]=useState('')
const[image,setImg]=useState("static/images/arrows-fullscreen.svg")
 const handleImage=()=>{
  console.log(v);
  if(v==0){
    setImg("static/images/fullscreen-exit.svg");
    document.getElementById("topicicon").style.visibility="hidden"
   
    setImage(1)
  }else{
    setImg("static/images/arrows-fullscreen.svg")
    if(window.innerWidth>768){
      document.getElementById("topicicon").style.visibility="visible"

    }
    setImage(0)
  }
}
// ---------add note modal -------------
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const addNote=async()=>{
  //     localStorage.setItem(noteTitle,JSON.stringify({note}));
  //   let sn= localStorage.getItem('note5');
  //   alert(JSON.parse(sn).note);
  // }
  // ----------------------------------------

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
          <span>Text</span>
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
     
{/* ---------------------add note--------------- */}

      {/* <svg id="addNote" onClick={handleShow} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue" className="bi bi-file-earmark-word-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"/>
</svg>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={addNote} className='noteForm'>
               <label htmlFor="">Note title</label>
               <input type="text" value={noteTitle} onChange={(e)=>setNoteTitle(e.target.value)} required/>
               <label htmlFor="">Note</label>
               <textarea cols="30" rows="5" value={note} onChange={(e)=>setNote(e.target.value)}></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNote}>
            Save
          </Button>
        </Modal.Footer>
      </Modal> */}


      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route element={<PrivateComponent/>}>
          <Route path="python/*" element={<><Apppython /></>} />
          <Route path="css/*" element={<><Appcss /> </>} />
          <Route path="html/*" element={<><Apphtml/> </>} />
          <Route path="java/*" element={<><AppJava/></>} />
          <Route path="react/*" element={<><Appreact/></>} />
          <Route path="profile/" element={<><Profile/></>} />
          
          </Route>
          
          <Route path="javascript/*" element={<Appjs/>} />
          <Route path="signin" element={<Signin/>} />
          <Route path="signup" element={<Signup/>} />
           <Route path="chatbot" element={<Chatbot/>} /> 
          <Route path="*" element={<Nopage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>




  
    </>
  )
}