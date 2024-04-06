import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
export default function Navbar() {
  // ----------add note section------------
  const [noteTitle, setNoteTitle] = useState('')
  const [note, setNote] = useState('');
  const [nshow, nsetShow] = useState(false);
  const nhandleClose = () => nsetShow(false);
  const nhandleShow = () => nsetShow(true);
  const addNote = async () => {
    localStorage.setItem(noteTitle, JSON.stringify({ note }));
    let sn = localStorage.getItem('note5');
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
  const[i,seti]=useState(0);
  function changePic(){
   switch(i){
    case 0:
      document.getElementById("prpic").src = "/static/images/ct0.jpg";
      seti(1);
      break;
      case 1:
      document.getElementById("prpic").src = "/static/images/ct1.jpg";
      seti(2);
      break;
      case 2:
      document.getElementById("prpic").src = "/static/images/ct2.jpg";
      seti(3);
      break;
      case 3:
      document.getElementById("prpic").src = "/static/images/ct3.jpg";
      seti(4);
      break;
      case 4:
      document.getElementById("prpic").src = "/static/images/ct4.jpg";
      seti(5);
      break;
      case 5:
      document.getElementById("prpic").src = "/static/images/ct5.jpg";
      seti(6);
      break;
      case 6:
      document.getElementById("prpic").src = "/static/images/ct6.jpg";
      seti(7);
      break;
      case 7:
      document.getElementById("prpic").src = "/static/images/ct7.jpg";
      seti(8);
      break;
      case 8:
      document.getElementById("prpic").src = "/static/images/ct8.jpg";
      seti(9);
      break;
      case 9:
      document.getElementById("prpic").src = "/static/images/ct9.jpg";
      seti(10);
      break;
      case 10:
      document.getElementById("prpic").src = "/static/images/ct10.jpg";
      seti(11);
      break;
      case 11:
      document.getElementById("prpic").src = "/static/images/ct11.jpg";
      seti(12);
      break;
      case 12:
      document.getElementById("prpic").src = "/static/images/ct12.jpg";
      seti(13);
      break;
      case 13:
      document.getElementById("prpic").src = "/static/images/ct13.jpg";
      seti(14);
      break;
      case 14:
      document.getElementById("prpic").src = "/static/images/ct14.jpg";
      seti(15);
      break;
      case 15:
      document.getElementById("prpic").src = "/static/images/ct15.jpg";
      seti(16);
      break;
      case 16:
      document.getElementById("prpic").src = "/static/images/ct16.jpg";
      seti(17);
      break;
      case 17:
      document.getElementById("prpic").src = "/static/images/ct17.jpg";
      seti(18);
      break;
      case 18:
      document.getElementById("prpic").src = "/static/images/ct18.jpg";
      seti(19);
      break;
      case 19:
      document.getElementById("prpic").src = "/static/images/ct19.jpg";
      seti(20);
      break;
      case 20:
      document.getElementById("prpic").src = "/static/images/ct20.jpg";
      seti(21);
      break;
      case 21:
      document.getElementById("prpic").src = "/static/images/ct21.jpg";
      seti(22);
      break;
      case 22:
      document.getElementById("prpic").src = "/static/images/ct22.jpg";
      seti(23);
      break;
      case 23:
      document.getElementById("prpic").src = "/static/images/ct23.jpg";
      seti(24);
      break;
      case 24:
      document.getElementById("prpic").src = "/static/images/ct24.jpg";
      seti(25);
      break;
      case 25:
      document.getElementById("prpic").src = "/static/images/ct25.jpg";
      seti(26);
      break;
      case 26:
      document.getElementById("prpic").src = "/static/images/ct26.jpg";
      seti(27);
      break;
      case 27:
      document.getElementById("prpic").src = "/static/images/ct27.jpg";
      seti(28);
      break;
      case 28:
      document.getElementById("prpic").src = "/static/images/ct28.jpg";
      seti(29);
      break;
      case 29:
      document.getElementById("prpic").src = "/static/images/ct29.jpg";
      seti(30);
      break;
      case 30:
      document.getElementById("prpic").src = "/static/images/ct30.jpg";
      seti(31);
      break;
      case 31:
      document.getElementById("prpic").src = "/static/images/ct31.jpg";
      seti(32);
      break;
      case 32:
      document.getElementById("prpic").src = "/static/images/ct32.jpg";
      seti(33);
      break;
      case 33:
      document.getElementById("prpic").src = "/static/images/ct33.jpg";
      seti(34);
      break;
      case 34:
      document.getElementById("prpic").src = "/static/images/ct34.jpg";
      seti(35);
      break;
      case 35:
      document.getElementById("prpic").src = "/static/images/ct35.jpg";
      seti(36);
      break;
      case 36:
      document.getElementById("prpic").src = "/static/images/ct36.jpg";
      seti(37);
      break;
      case 37:
      document.getElementById("prpic").src = "/static/images/ct37.jpg";
      seti(38);
      break;
      case 38:
      document.getElementById("prpic").src = "/static/images/ct38.jpg";
      seti(39);
      break;
      case 39:
      document.getElementById("prpic").src = "/static/images/ct39.jpg";
      seti(40);
      break;
      case 40:
      document.getElementById("prpic").src = "/static/images/ct40.jpg";
      seti(41);
      break;
      case 41:
      document.getElementById("prpic").src = "/static/images/ct41.jpg";
      seti(42);
      break;
      case 42:
      document.getElementById("prpic").src = "/static/images/ct42.jpg";
      seti(43);
      break;
      case 43:
      document.getElementById("prpic").src = "/static/images/ct43.jpg";
      seti(44);
      break; 
      case 44:
      document.getElementById("prpic").src = "/static/images/ct44.jpg";
      seti(45);
      break;
      case 45:
      document.getElementById("prpic").src = "/static/images/ct45.jpg";
      seti(46);
      break;
      case 46:
      document.getElementById("prpic").src = "/static/images/ct46.jpg";
      seti(47);
      break;
      case 47:
      document.getElementById("prpic").src = "/static/images/ct47.jpg";
      seti(48);
      break;
      case 48:
      document.getElementById("prpic").src = "/static/images/ct48.jpg";
      seti(49);
      break;
      case 49:
      document.getElementById("prpic").src = "/static/images/ct49.jpg";
      seti(50);
      break;
      case 50:
      document.getElementById("prpic").src = "/static/images/ct50.jpg";
      seti(51);
      break;
      case 51:
      document.getElementById("prpic").src = "/static/images/ct51.jpg";
      seti(52);
      break;
      case 52:
      document.getElementById("prpic").src = "/static/images/ct52.jpg";
      seti(53);
      break;
      case 53:
      document.getElementById("prpic").src = "/static/images/ct53.jpg";
      seti(54);
      break;
      case 54:
      document.getElementById("prpic").src = "/static/images/ct54.jpg";
      seti(55);
      break;
      case 55:
      document.getElementById("prpic").src = "/static/images/ct55.jpg";
      seti(56);
      break;
      case 56:
      document.getElementById("prpic").src = "/static/images/ct56.jpg";
      seti(57);
      break;
      case 57:
      document.getElementById("prpic").src = "/static/images/ct57.jpg";
      seti(58);
      break;
      case 58:
        document.getElementById("prpic").src = "/static/images/ct58.jpg";
        seti(59);
        break;
        case 59:
          document.getElementById("prpic").src = "/static/images/ct59.jpg";
          seti(60);
          break;
          case 60:
            document.getElementById("prpic").src = "/static/images/ct60.png";
            seti(0);
            break;

   }
   console.log(i)
  }
  // name display
  useEffect(() => {
    const storedName = localStorage.getItem("student");
    if (storedName) {
      let nam = JSON.parse(storedName).name;
      setName(nam);
    }
  }, []);
  function showEmoji() {
    document.getElementById("hover-icon").style.marginLeft = "0"
  }
  function hideEmoji() {
    document.getElementById("hover-icon").style.marginLeft = "700px"
  }
  function setLike1() { document.getElementById("like").style.backgroundImage = "url(/static/images/em8.jpg)"; }
  function setLike2() { document.getElementById("like").style.backgroundImage = "url(/static/images/em.png)"; }
  function setLike3() { document.getElementById("like").style.backgroundImage = "url(/static/images/em2.jpg)"; }
  function setLike4() { document.getElementById("like").style.backgroundImage = "url(/static/images/em3.png)"; }
  function setLike5() { document.getElementById("like").style.backgroundImage = "url(/static/images/em4.png)"; }
  function setLike6() { document.getElementById("like").style.backgroundImage = "url(/static/images/em5.jpeg)"; }
  function setLike7() { document.getElementById("like").style.backgroundImage = "url(/static/images/em6.png)"; }
  function setLike8() { document.getElementById("like").style.backgroundImage = "url(/static/images/em7.webp)"; }

  return (
    <>
      {/* ----------add note section------------ */}
      {/* chatbot icon */}
      <div className="fixedIcon">
        <svg id="addNote" onClick={nhandleShow} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue" className=" fixedItem bi bi-file-earmark-word-fill" viewBox="0 0 16 16">
          <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z" />
        </svg>
        <Modal show={nshow} onHide={nhandleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={addNote} className='noteForm'>
              <label htmlFor="">Note title</label>
              <input type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} required />
              <label htmlFor="">Note</label>
              <textarea cols="30" rows="5" value={note} onChange={(e) => setNote(e.target.value)}></textarea>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Link to="profile" onClick={nhandleClose}>View your Notes</Link>
            <Button variant="secondary" onClick={nhandleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => { addNote(), nhandleClose() }}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
       

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
                          onClick={event => { () => handleLinkClick("numpy"), handleClose() }}
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
                          onClick={event => { () => handleLinkClick("lf"), handleClose() }}
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
                          onClick={event => { () => handleLinkClick("sp"), handleClose() }}
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
                          onClick={event => { () => handleLinkClick("matlibplot"), handleClose() }}
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
                          onClick={event => { () => handleLinkClick("machinelearning"), handleClose() }}
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
                          onClick={event => { () => handleLinkClick("deeplearning"), handleClose() }}
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
                          onClick={event => { () => handleLinkClick("jdbc"), handleClose() }}
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
                          onClick={event => { () => handleLinkClick("jlf"), handleClose() }}
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
                          onClick={event => { () => handleLinkClick("rbasic"), handleClose() }}
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
                    <Link onClick={handleClose} to="/advjava">Adv. Java</Link>
                  </Accordion.Header>
                  <Accordion.Body className="accordionbody">
                    {/* dropdown links */}
                    <ul>
                      <li>
                        <Link
                          to="advjava/driver"
                          style={{
                            color: clickedLink == "driver" ? "red" : "magenta",
                          }}
                          onClick={event => { () => handleLinkClick("driver"), handleClose() }}
                        >
                          Driver
                        </Link>
                      </li>
                    </ul>
                    </Accordion.Body>
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
                  <img src="/static/images/mypic.png" onClick={changePic} className="round-img" id="prpic" height='120' />

                  <a href="https://www.facebook.com/profile.php?id=100011571371578" target="_blank"><img src="/static/images/fb.png" alt="facebook" className="round-img fb sm" height='35' /></a>
                  <a href="https://www.instagram.com/prem_programr/" target="_blank"><img src="/static/images/instagram.jpg" alt="Instagram" className="round-img insta sm" height='30' /></a>
                  <a href="https://wa.me/7366943700" target="_blank"><img src="/static/images/whatsapp.webp" alt="whatsapp" className="round-img whatsapp sm" height='30' /></a>
                  <a href="https://www.linkedin.com/in/kumar-prem-94aabc1999/" target="_blank"><img src="/static/images/linkedin.png" alt="linkedin" className="round-img linkedin sm" height='30' /></a>
                  <div id="like" onMouseOver={showEmoji} onMouseOut={hideEmoji}></div>
                  <div id="hover-icon" onMouseOver={showEmoji} onMouseOut={hideEmoji} >
                    <div className="emoji" onClick={setLike1}><img src="/static/images/em8.jpg" /></div>
                    <div className="emoji" onClick={setLike2}><img src="/static/images/em.png" /></div>
                    <div className="emoji" onClick={setLike3}><img src="/static/images/em2.jpg" /></div>
                    <div className="emoji" onClick={setLike4}><img src="/static/images/em3.png" /></div>
                    <div className="emoji" onClick={setLike5}><img src="/static/images/em4.png" /></div>
                    <div className="emoji" onClick={setLike6}><img src="/static/images/em5.jpeg" /></div>
                    <div className="emoji" onClick={setLike7}><img src="/static/images/em6.png" /></div>
                    <div className="emoji" onClick={setLike8}><img src="/static/images/em7.webp" /></div>
                  </div>

                </Modal.Body>
                <Modal.Footer className="ftr">
                  {
                    auth ? <Link to="profile" style={{ display: "flex", alignItems: "center", gap: "10px" }} onClick={disappearmodal}><img src="/static/images/profile.png" alt="profile" className="round-img" height="40" /><h5>Profile</h5></Link> : null
                  }
                  <div className="authentication">
                    {auth ? (
                      <Link onClick={signout} to="/signup">
                        Log out {studentName}
                      </Link>
                    ) : (
                      <>
                        <Link style={{ marginRight: "10px" }} to="signin" onClick={disappearmodal}>
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
