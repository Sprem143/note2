import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
import './mainpage/Navbar.css'
import ReactHome from './pages/react/ReactHome';
// import Footer from './mainpage/Footer';
export default function App(){
  function changeTheme() {
    let colore = document.getElementById("exampleColorInput").value;
document.getElementById("root").style.backgroundColor= colore  }

function changetext(){
  let colore = document.getElementById("exampleColorInput2").value;
document.getElementById("root").style.color= colore  }

const[v, setImage]= useState(0);
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
// ----------chat bot section-----------------

const [show, setShow] = useState(false);
const [userQuestion,setUserQuestion]=useState('');
const [ans, setAns]=useState('');
const [inputValue, setInputValue]=useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleQuestion=()=>{
   setUserQuestion(inputValue);
   setInputValue('')
   let lcq=inputValue.toLowerCase();
   if(lcq.includes('react')){
   let text= document.getElementById('react').textContent;
   setAns(text)
    console.log(text);
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
      {/* -------chat bot section--------- */}


      <div className="fixedIcon" onClick={handleShow}>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-robot cb" viewBox="0 0 16 16">
          <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
          <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
        </svg>
    </div>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header className='cbheader' closeButton>
          <Modal.Title><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-robot me-3" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
</svg>Ask to Chatbot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>How can i help you?</p>
          <div className="qa">
          <p className="ques">{userQuestion}</p>
          <p className="ans">{ans}</p>
          </div>
         
          </Modal.Body>
        <Modal.Footer>
          <input type="text" className='messagebox' value={inputValue} name='inputValue' onChange={(e)=>setInputValue(e.target.value)} />
          <Button variant="primary" onClick={handleQuestion} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg>
          </Button>
        </Modal.Footer>
      </Modal>
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

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>




  
    </>
  )
}