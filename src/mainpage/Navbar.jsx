import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
export default function Navbar() {
  // ----------add note section------------
  const [noteTitle,setNoteTitle]=useState('')
const [note,setNote]=useState('');
const [nshow, nsetShow] = useState(false);
const nhandleClose = () => nsetShow(false);
const nhandleShow = () => nsetShow(true);
const addNote=async()=>{
    localStorage.setItem(noteTitle,JSON.stringify({note}));
  let sn= localStorage.getItem('note5');
  alert("Note added successfully!")
  alert(JSON.parse(sn).note);
}

// -------------------------------------------
  const [showac, setShowac] = useState(false);
  const handleCloseac = () => setShowac(false);
  const handleShowac = () => setShowac(true);
  const auth = localStorage.getItem("student");
  const [show, setShow] = useState(false);
  const [studentName, setName] = useState("user");
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [clickedLink, setClickedLink] = useState(null);
  const handleLinkClick = (link) => {
    setClickedLink(link);
  };
  function disappearmodal() {
    document.getElementsByClassName("acnt-model")[1].style.display = "hidden";
  }
  function signout() {
    localStorage.removeItem('student');
    navigate("/signup");
    document.getElementsByClassName("acnt-model")[1].style.display = "hidden";
  }
  // name display
  useEffect(() => {
    const storedName = localStorage.getItem("student");
    if(storedName) {
      let nam = JSON.parse(storedName).name;
      setName(nam);
    }
  }, []);
  function showEmoji(){
       document.getElementById("hover-icon").style.marginLeft="0"     
  }
  function hideEmoji(){
    document.getElementById("hover-icon").style.marginLeft="700px"
  }
  function setLike1(){document.getElementById("like").style.backgroundImage="url(/static/images/em8.jpg)";}
  function setLike2(){document.getElementById("like").style.backgroundImage="url(/static/images/em.png)";}
  function setLike3(){document.getElementById("like").style.backgroundImage="url(/static/images/em2.jpg)";}
  function setLike4(){document.getElementById("like").style.backgroundImage="url(/static/images/em3.png)";}
  function setLike5(){document.getElementById("like").style.backgroundImage="url(/static/images/em4.png)";}
  function setLike6(){document.getElementById("like").style.backgroundImage="url(/static/images/em5.jpeg)";}
  function setLike7(){document.getElementById("like").style.backgroundImage="url(/static/images/em6.png)";}
  function setLike8(){document.getElementById("like").style.backgroundImage="url(/static/images/em7.webp)";}

  return (
    <>
    {/* ----------add note section------------ */}
   
    {/* chatbot icon */}
     <div className="fixedIcon">
    <svg id="addNote" onClick={nhandleShow} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue" className=" fixedItem bi bi-file-earmark-word-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"/>
</svg>
      <Modal show={nshow} onHide={nhandleClose}>
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
          <Link to="profile" onClick={nhandleClose}>View your Notes</Link>
          <Button variant="secondary" onClick={nhandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addNote(),nhandleClose()}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Link to="chatbot"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
</svg></Link>

    </div> 
      <nav id="main-nav">
        {/* -----------------------menu icons*----------------------*/}
        <div className="menu-icon">
          <svg
            onClick={handleShow}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="24"
            fill="white"
            className=" bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Welcome {studentName}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="sidebar">
              <Accordion>
                <Accordion.Item eventKey="0" className="accordianItem">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/python-logo.png"
                      alt="python"
                      height="30"
                    />
                    <Link to="/python" onClick={handleClose}>Python</Link>
                  </Accordion.Header>
                  <Accordion.Body className="accordionbody">
                    {/* dropdown links */}
                    <ul>
                      <li>
                        <Link
                          to="python/numpy"
                          style={{
                            color: clickedLink == "numpy" ? "red" : "magenta",
                          }}
                          onClick={event=>{() => handleLinkClick("numpy"),handleClose()}}
                        >
                          Numpy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/python/languagefundamental"
                          style={{
                            color: clickedLink == "lf" ? "red" : "magenta",
                          }}
                          onClick={event=>{() => handleLinkClick("lf"),handleClose()}}
                        >
                          Identifiers
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/python/startproject"
                          style={{
                            color: clickedLink == "sp" ? "red" : "magenta",
                          }}
                          onClick={event=>{() => handleLinkClick("sp"),handleClose()}}
                        >
                          Django Project
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/python/matlibplot"
                          style={{
                            color:
                              clickedLink == "matlibplot" ? "red" : "magenta",
                          }}
                          onClick={event=>{() => handleLinkClick("matlibplot"),handleClose()}}
                        >
                          Matlibplot
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/python/machinelearning"
                          style={{
                            color:
                              clickedLink == "machinelearning"
                                ? "red"
                                : "magenta",
                          }}
                          onClick={event=>{() => handleLinkClick("machinelearning"),handleClose()}}
                        >
                          Machine Learining
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/python/deeplearning"
                          style={{
                            color:
                              clickedLink == "deeplearning" ? "red" : "magenta",
                          }}
                          onClick={event=>{() => handleLinkClick("deeplearning"),handleClose()}}
                        >
                          Deep Learining
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="accordianItem">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/java-logo.png"
                      alt="python"
                      height="30"
                    />
                    <Link onClick={handleClose} to="/java">Java</Link>
                  </Accordion.Header>
                  <Accordion.Body className="accordionbody">
                 <ul>
                 <li>
                        <Link
                          to="java/jdbc"
                          style={{
                            color: clickedLink == "jdbc" ? "red" : "magenta",
                          }}
                          onClick={event=>{() => handleLinkClick("jdbc"),handleClose()}}
                        >
                          JDBC
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="java/languagefundamental"
                          style={{
                            color: clickedLink == "jlf" ? "red" : "magenta",
                          }}
                          onClick={event=>{() => handleLinkClick("jlf"),handleClose()}}
                        >
                          Identifiers
                        </Link>
                      </li>
                 </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/React-logo.png"
                      alt="react"
                      height="30"
                    />
                    <Link onClick={handleClose} to="/react">React</Link>
                  </Accordion.Header>
                  <Accordion.Body className="accordionbody">
                    {/* dropdown links */}
                    <ul>
                    <li>
                        <Link
                          to="react/basic"
                          style={{
                            color: clickedLink == "rbasic" ? "red" : "magenta",
                          }}
                          onClick={event=>{() => handleLinkClick("rbasic"),handleClose()}}
                        >
                          Basic
                        </Link>
                      </li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/html-logo.png"
                      alt="html"
                      height="30"
                    />
                    <Link onClick={handleClose} to="/html">HTML</Link>
                  </Accordion.Header>
                  <Accordion.Body className="accordionbody">{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/css-logo.png"
                      alt="css"
                      height="30"
                      width="25"
                    />
                    <Link onClick={handleClose} to="/css">CSS</Link>
                  </Accordion.Header>
                  <Accordion.Body className="accordionbody">{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/javascript-logo.png"
                      alt="js"
                      height="30"
                    />
                    <Link onClick={handleClose} to="/javascript">JavaScript</Link>
                  </Accordion.Header>
                  <Accordion.Body className="accordionbody">{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/django-logo.png"
                      alt="js"
                      height="30"
                    />
                    <Link onClick={handleClose} to="/django">Django</Link>
                  </Accordion.Header>
                  <Accordion.Body className="accordionbody">{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/spring-logo.png"
                      alt="spring"
                      height="30"
                    />
                    <Link onClick={handleClose} to="/spring">Spring</Link>
                  </Accordion.Header>
                  <Accordion.Body className="accordionbody">{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/springboot-logo.png"
                      alt="js"
                      height="30"
                    />
                    <Link onClick={handleClose} to="/springboot">Springboot</Link>
                  </Accordion.Header>
                  <Accordion.Body>{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/nodejs-logo.png"
                      alt="nodejs"
                      height="30"
                    />
                    <Link onClick={handleClose} to="/nodejs">Node JS</Link>
                  </Accordion.Header>
                  <Accordion.Body className="accordionbody">{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                  <Accordion.Header className="accordianHeader">
                    <img src="/static/images/c-logo.png" alt="c" height="30" />
                    <Link onClick={handleClose} to="/c">C Language</Link>
                  </Accordion.Header>
                  <Accordion.Body className="accordionbody">{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/python-logo.png"
                      alt="c++"
                      height="30"
                    />
                    <Link onClick={handleClose} to="/c++">C++ Language</Link>
                  </Accordion.Header>
                  <Accordion.Body className="accordionbody">{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div className="nav1">
          <img
            className="round-img mi"
            src="/static/images/java-logo.png"
            height="40"
          />
          <img
            className="round-img pyicon"
            src="/static/images/python-logo.png"
            alt=""
            height="40"
          />
          <ul className="links-container" id="nave">
            <li>
              <Link to="/">
                <img
                  className="round-img"
                  src="/static/images/logo.png"
                  alt="logo"
                  height="60"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/python"
                style={{ color: clickedLink == "python" ? "red" : "white" }}
                onClick={() => handleLinkClick("python")}
              >
                Python
              </Link>
            </li>
            <li>
              <Link
                to="/java"
                style={{ color: clickedLink == "java" ? "red" : "white" }}
                onClick={() => handleLinkClick("java")}
              >
                JAVA
              </Link>
            </li>
            <li>
              <Link
                to="/react"
                style={{ color: clickedLink == "react" ? "red" : "white" }}
                onClick={() => handleLinkClick("react")}
              >
                REACT
              </Link>
            </li>
            <li>
              <Link
                to="/html"
                style={{ color: clickedLink == "html" ? "red" : "white" }}
                onClick={() => handleLinkClick("html")}
              >
                HTML
              </Link>
            </li>
            <li>
              <Link
                to="/css"
                style={{ color: clickedLink == "css" ? "red" : "white" }}
                onClick={() => handleLinkClick("css")}
              >
                CSS
              </Link>
            </li>
            <li>
              <Link
                to="/javascript"
                style={{ color: clickedLink == "numpy" ? "red" : "white" }}
                onClick={() => handleLinkClick("numpy")}
              >
                JavaScript
              </Link>
            </li>

            <li>
              <div className="account">
                {/* model */}
                <Button id="acnt-btn" onClick={handleShowac}>
                  <img
                    src="/static/images/mypic.png"
                    alt="account"
                    className="round-img"
                    height="45"
                  />
                </Button>
              </div>
            </li>
          </ul>
        </div>

        {/* mobile navbar */}
        <div className="nav2">
          {/*---------------------- mobile logo---------------------- */}
          <div className="logo">
            <Link to="/">
              <img
                className="round-img"
                src="/static/images/logo.png"
                alt="logo"
                height="60"
              />
            </Link>
          </div>
          <ul className="links-container2">
            <li>
              <Link to="/python">Python</Link>
            </li>
            <li>
              <Link to="/java">JAVA</Link>
            </li>
            <li>
              <Link to="/html">HTML</Link>
            </li>
            <li>
              <Link to="/css">CSS</Link>
            </li>
          </ul>
          {/* -----------------------account ------------------------------- */}
          <div className="account">
            <Button id="acnt-btn" onClick={handleShowac}>
              <img
                src="/static/images/mypic.png"
                alt="account"
                className="round-img"
                height="45"
              />
            </Button>

            <Modal
              show={showac}
              onHide={handleCloseac}
              animation={false}
              className="acnt-model"
            >
              <div className="model-content">
                <Modal.Header closeButton>
                  <Modal.Title>Prem Kumar</Modal.Title>
                </Modal.Header>
                <Modal.Body className="model-body">
                  <img  src="/static/images/mypic.png" className="round-img" height='120' />

                 <a href="https://www.facebook.com/profile.php?id=100011571371578" target="_blank"><img src="/static/images/fb.png" alt="facebook" className="round-img fb sm" height='35' /></a>  
                 <a href="https://www.instagram.com/prem_programr/" target="_blank"><img src="/static/images/instagram.jpg" alt="Instagram" className="round-img insta sm" height='30' /></a>  
                 <a href="https://wa.me/7366943700" target="_blank"><img src="/static/images/whatsapp.webp" alt="whatsapp" className="round-img whatsapp sm" height='30' /></a>  
                 <a href="https://www.linkedin.com/in/kumar-prem-94aabc1999/" target="_blank"><img src="/static/images/linkedin.png" alt="linkedin" className="round-img linkedin sm" height='30' /></a>  
                <div id="like" onMouseOver={showEmoji} onMouseOut={hideEmoji}></div>
                <div id="hover-icon" onMouseOver={showEmoji} onMouseOut={hideEmoji} >
                  <div className="emoji" onClick={setLike1}><img src="/static/images/em8.jpg"/></div>
                  <div className="emoji" onClick={setLike2}><img src="/static/images/em.png"/></div>
                  <div className="emoji" onClick={setLike3}><img src="/static/images/em2.jpg"/></div>
                  <div className="emoji" onClick={setLike4}><img src="/static/images/em3.png"/></div>
                  <div className="emoji" onClick={setLike5}><img src="/static/images/em4.png"/></div>
                  <div className="emoji" onClick={setLike6}><img src="/static/images/em5.jpeg"/></div>
                  <div className="emoji" onClick={setLike7}><img src="/static/images/em6.png"/></div>
                  <div className="emoji" onClick={setLike8}><img src="/static/images/em7.webp"/></div>
                   </div>
                   
                </Modal.Body>
                <Modal.Footer className="ftr">
                  {
                    auth?<Link to="profile" style={{display:"flex", alignItems:"center", gap:"10px"}} onClick={disappearmodal}><img src="/static/images/profile.png" alt="profile" className="round-img" height="40" /><h5>Profile</h5></Link>:null
                  }
                  <div className="authentication">
                  {auth ? (
                    <Link onClick={signout} to="/signup">
                      Log out {studentName}
                    </Link>
                  ) : (
                    <>
                      <Link style={{marginRight:"10px"}} to="signin" onClick={disappearmodal}>
                        Log in
                      </Link>
                      <Link to="signup" onClick={disappearmodal}>
                        sign up
                      </Link>
                    </>
                  )}
                  </div>
                </Modal.Footer>
              </div>
            </Modal>
          </div>
        </div>
      </nav>
      <div id="topicicon">
        <div>
          <Link to="/python">
            <img src="/static/images/python-logo.png" alt="" height="30" />{" "}
          </Link>
          <Link to="/python">Python</Link>
        </div>
        <div>
          <Link to="/java">
            <img src="/static/images/java-logo.png" alt="" height="30" />
          </Link>
          <Link to="/java">Java</Link>
        </div>
        <div>
          <Link to="/react">
            <img src="/static/images/React-logo.png" alt="" height="30" />
          </Link>
          <Link to="/react">React</Link>
        </div>
        <div>
          <Link to="/html">
            <img src="/static/images/html-logo.png" alt="" height="30" />
          </Link>
          <Link to="/html">HTML</Link>
        </div>
        <div>
          <Link to="/css">
            <img src="/static/images/css-logo.png" alt="" height="30" />
          </Link>
          <Link to="/css">CSS</Link>
        </div>
        <div>
          <Link to="/javascript">
            {" "}
            <img
              src="/static/images/javascript-logo.png"
              alt=""
              height="30"
            />{" "}
          </Link>
          <Link to="/javascript">JS</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
