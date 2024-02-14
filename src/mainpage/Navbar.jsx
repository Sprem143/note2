import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
export default function Navbar() {
  const [showac, setShowac] = useState(false);
  const handleCloseac = () => setShowac(false);
  const handleShowac = () => setShowac(true);
  const auth = localStorage.getItem("student");
  const [show, setShow] = useState(false);
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
    localStorage.clear();
    navigate("/signup");
    document.getElementsByClassName("acnt-model")[1].style.display = "hidden";
  }

  // name display
  const [studentName, setName] = useState("user");
  useEffect(() => {
    const storedName = localStorage.getItem("student");
    if (storedName) {
      let nam = JSON.parse(storedName).name;
      setName(nam);
    }
  }, []);
  function showEmoji(){
      
       document.getElementById("hover-icon").style.marginLeft="0"
      // for(let i=2;i<) 
     
  }
  function hideEmoji(){
    document.getElementById("hover-icon").style.marginLeft="700px"
  }
  function setLike1(){
    document.getElementById('like1').style.marginTop='70px';
    document.getElementById('like1').style.marginLeft='-200px';
    document.getElementById('like').style.visibility='hidden';
     document.getElementById('like2').style.visibility='hidden';
     document.getElementById('like3').style.visibility='hidden';
     document.getElementById('like4').style.visibility='hidden';
     document.getElementById('like5').style.visibility='hidden';
     document.getElementById('like6').style.visibility='hidden';
     document.getElementById('like7').style.visibility='hidden';
     document.getElementById('like8').style.visibility='hidden';
    }
  function setLike2(){
    document.getElementById('like2').style.marginTop='70px';
    document.getElementById('like2').style.marginLeft='-235px';
    document.getElementById('like').style.visibility='hidden';
     document.getElementById('like1').style.visibility='hidden';
     document.getElementById('like3').style.visibility='hidden';
     document.getElementById('like4').style.visibility='hidden';
     document.getElementById('like5').style.visibility='hidden';
     document.getElementById('like6').style.visibility='hidden';
     document.getElementById('like7').style.visibility='hidden';
     document.getElementById('like8').style.visibility='hidden';
  }
  function setLike3(){
    document.getElementById('like3').style.marginTop='70px';
    document.getElementById('like3').style.marginLeft='-270px';
    document.getElementById('like').style.visibility='hidden';
     document.getElementById('like1').style.visibility='hidden';
     document.getElementById('like2').style.visibility='hidden';
     document.getElementById('like4').style.visibility='hidden';
     document.getElementById('like5').style.visibility='hidden';
     document.getElementById('like6').style.visibility='hidden';
     document.getElementById('like7').style.visibility='hidden';
     document.getElementById('like8').style.visibility='hidden';
  }
  function setLike4(){
    document.getElementById('like4').style.marginTop='70px';
    document.getElementById('like4').style.marginLeft='-315px';
    document.getElementById('like').style.visibility='hidden';
     document.getElementById('like1').style.visibility='hidden';
     document.getElementById('like2').style.visibility='hidden';
     document.getElementById('like3').style.visibility='hidden';
     document.getElementById('like5').style.visibility='hidden';
     document.getElementById('like6').style.visibility='hidden';
     document.getElementById('like7').style.visibility='hidden';
     document.getElementById('like8').style.visibility='hidden';
  }
  function setLike5(){
    document.getElementById('like5').style.marginTop='70px';
    document.getElementById('like5').style.marginLeft='-355px';
    document.getElementById('like').style.visibility='hidden';
     document.getElementById('like1').style.visibility='hidden';
     document.getElementById('like2').style.visibility='hidden';
     document.getElementById('like3').style.visibility='hidden';
     document.getElementById('like4').style.visibility='hidden';
     document.getElementById('like6').style.visibility='hidden';
     document.getElementById('like7').style.visibility='hidden';
     document.getElementById('like8').style.visibility='hidden';
  }
  function setLike6(){
    document.getElementById('like6').style.marginTop='70px';
    document.getElementById('like6').style.marginLeft='-395px';
    document.getElementById('like').style.visibility='hidden';
     document.getElementById('like1').style.visibility='hidden';
     document.getElementById('like2').style.visibility='hidden';
     document.getElementById('like3').style.visibility='hidden';
     document.getElementById('like4').style.visibility='hidden';
     document.getElementById('like5').style.visibility='hidden';
     document.getElementById('like7').style.visibility='hidden';
     document.getElementById('like8').style.visibility='hidden';
  }
  function setLike7(){
    document.getElementById('like7').style.marginTop='70px';
    document.getElementById('like7').style.marginLeft='-425px';
    document.getElementById('like').style.visibility='hidden';
     document.getElementById('like1').style.visibility='hidden';
     document.getElementById('like2').style.visibility='hidden';
     document.getElementById('like3').style.visibility='hidden';
     document.getElementById('like4').style.visibility='hidden';
     document.getElementById('like5').style.visibility='hidden';
     document.getElementById('like6').style.visibility='hidden';
     document.getElementById('like8').style.visibility='hidden';
  }
  function setLike8(){
    document.getElementById('like8').style.marginTop='70px';
    document.getElementById('like8').style.marginLeft='-460px';
    document.getElementById('like').style.visibility='hidden';
     document.getElementById('like1').style.visibility='hidden';
     document.getElementById('like2').style.visibility='hidden';
     document.getElementById('like3').style.visibility='hidden';
     document.getElementById('like4').style.visibility='hidden';
     document.getElementById('like5').style.visibility='hidden';
     document.getElementById('like6').style.visibility='hidden';
     document.getElementById('like7').style.visibility='hidden';
  }

  
  return (
    <>
      <nav id="main-nav">
        {/* -----------------------menu icons*----------------------*/}
        <div className="menu-icon">
          <svg
            onClick={handleShow}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="24"
            fill="white"
            className="bi bi-list"
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
                    <Link to="/python">Python</Link>
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
                          onClick={() => handleLinkClick("numpy")}
                        >
                          Numpy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/python/panda"
                          style={{
                            color: clickedLink == "panda" ? "red" : "magenta",
                          }}
                          onClick={() => handleLinkClick("panda")}
                        >
                          Panda
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/python/seaborn"
                          style={{
                            color: clickedLink == "seaborn" ? "red" : "magenta",
                          }}
                          onClick={() => handleLinkClick("seaborn")}
                        >
                          Seaborn
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/python/matlibplot"
                          style={{
                            color:
                              clickedLink == "matlibplot" ? "red" : "magenta",
                          }}
                          onClick={() => handleLinkClick("matlibplot")}
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
                          onClick={() => handleLinkClick("machinelearning")}
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
                          onClick={() => handleLinkClick("deeplearning")}
                        >
                          Deep Learining
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/java-logo.png"
                      alt="python"
                      height="30"
                    />
                    <Link to="/java">Java</Link>
                  </Accordion.Header>
                  <Accordion.Body>{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/React-logo.png"
                      alt="react"
                      height="30"
                    />
                    <Link to="/react">React</Link>
                  </Accordion.Header>
                  <Accordion.Body>{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/html-logo.png"
                      alt="html"
                      height="30"
                    />
                    <Link to="/html">HTML</Link>
                  </Accordion.Header>
                  <Accordion.Body>{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/css-logo.png"
                      alt="css"
                      height="30"
                      width="25"
                    />
                    <Link to="/css">CSS</Link>
                  </Accordion.Header>
                  <Accordion.Body>{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/javascript-logo.png"
                      alt="js"
                      height="30"
                    />
                    <Link to="/javascript">JavaScript</Link>
                  </Accordion.Header>
                  <Accordion.Body>{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/django-logo.png"
                      alt="js"
                      height="30"
                    />
                    <Link to="/django">Django</Link>
                  </Accordion.Header>
                  <Accordion.Body>{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/spring-logo.png"
                      alt="spring"
                      height="30"
                    />
                    <Link to="/spring">Spring</Link>
                  </Accordion.Header>
                  <Accordion.Body>{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/springboot-logo.png"
                      alt="js"
                      height="30"
                    />
                    <Link to="/springboot">Springboot</Link>
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
                    <Link to="/nodejs">Node JS</Link>
                  </Accordion.Header>
                  <Accordion.Body>{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                  <Accordion.Header className="accordianHeader">
                    <img src="/static/images/c-logo.png" alt="c" height="30" />
                    <Link to="/c">C Language</Link>
                  </Accordion.Header>
                  <Accordion.Body>{/* dropdown links */}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                  <Accordion.Header className="accordianHeader">
                    <img
                      src="/static/images/python-logo.png"
                      alt="c++"
                      height="30"
                    />
                    <Link to="/c++">C++ Language</Link>
                  </Accordion.Header>
                  <Accordion.Body>{/* dropdown links */}</Accordion.Body>
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
                    src="/static/images/account.png"
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
                src="/static/images/account.png"
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
                  <img
                    src="/static/images/mypic.png"
                    className="round-img"
                    alt=""
                    height="120"
                  />
                  <svg onMouseOver={showEmoji}  onMouseOut={hideEmoji} id="like"  xmlns="http://www.w3.org/2000/svg" style={{visibility:"visible"}} width="30" height="28" fill="blue" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 18">
  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
</svg>
                   {/* hover icons */}
                   <div id="hover-icon" onMouseOver={showEmoji} onMouseOut={hideEmoji} >
                   <svg
                   onClick={setLike1}
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="red"
                    class="bi bi-heart-fill" id="like1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd" 
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                  <svg onClick={setLike2} id="like2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="pink" class="bi bi-heartbreak-fill" viewBox="0 0 16 16">
  <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77"/>
</svg>
<svg onClick={setLike3} id="like3" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="yellow" class="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.559 5.448a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
</svg>
<svg onClick={setLike4} id="like4" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="lime" class="bi bi-emoji-kiss-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M16 8a8 8 0 1 0-2.697 5.99c-.972-.665-1.632-1.356-1.99-2.062-.388-.766-.419-1.561-.075-2.23.496-.97 1.73-1.466 2.762-1.05.65-.262 1.38-.162 1.957.19Q16 8.425 16 8M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m1.512 3.647c-.347.08-.737.198-1.107.319a.5.5 0 1 1-.31-.95c.38-.125.802-.254 1.192-.343.37-.086.78-.153 1.103-.108.16.022.394.085.561.286.188.226.187.497.131.705a1.9 1.9 0 0 1-.31.593q-.115.16-.275.343.16.186.276.347c.142.197.256.397.31.595.055.208.056.479-.132.706-.168.2-.404.262-.563.284-.323.043-.733-.027-1.102-.113a15 15 0 0 1-1.191-.345.5.5 0 1 1 .31-.95c.371.12.761.24 1.109.321q.264.062.446.084a6 6 0 0 0-.502-.584.5.5 0 0 1 .002-.695 5.5 5.5 0 0 0 .5-.577 5 5 0 0 0-.448.082m.766-.086-.006-.002zm.002 1.867-.005.001.006-.002Zm.157-4.685a.5.5 0 0 1-.874-.486A1.93 1.93 0 0 1 10.25 5.75c.73 0 1.356.412 1.687 1.007a.5.5 0 1 1-.874.486.93.93 0 0 0-.813-.493.93.93 0 0 0-.813.493M14 9.828c1.11-1.14 3.884.856 0 3.422-3.884-2.566-1.11-4.562 0-3.421Z"/>
</svg>
<svg onClick={setLike5} id="like5" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="crimson" class="bi bi-emoji-surprise-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M7 5.5C7 4.672 6.552 4 6 4s-1 .672-1 1.5S5.448 7 6 7s1-.672 1-1.5m4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 7 10 7s1-.672 1-1.5M8 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
</svg>
<svg onClick={setLike6} id="like6" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="hotpink" class="bi bi-emoji-wink-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5M4.285 9.567a.5.5 0 0 0-.183.683A4.5 4.5 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.5 3.5 0 0 1 8 11.5a3.5 3.5 0 0 1-3.032-1.75.5.5 0 0 0-.683-.183m5.152-3.31a.5.5 0 0 0-.874.486c.33.595.958 1.007 1.687 1.007s1.356-.412 1.687-1.007a.5.5 0 0 0-.874-.486.93.93 0 0 1-.813.493.93.93 0 0 1-.813-.493"/>
</svg>
<svg onClick={setLike7} id="like7" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="deepskyblue" class="bi bi-emoji-sunglasses-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.2 4.2 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A3 3 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515zM4.969 9.75A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z"/>
</svg>
<svg onClick={setLike8} id="like8" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-emoji-angry-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.053 4.276a.5.5 0 0 1 .67-.223l2 1a.5.5 0 0 1 .166.76c.071.206.111.44.111.687C7 7.328 6.552 8 6 8s-1-.672-1-1.5c0-.408.109-.778.285-1.049l-1.009-.504a.5.5 0 0 1-.223-.67zm.232 8.157a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 1 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5 0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5"/>
</svg>
                   </div>
                </Modal.Body>
                <Modal.Footer className="authentication">
                  {auth ? (
                    <Link onClick={signout} to="/signup">
                      sign out {studentName}
                    </Link>
                  ) : (
                    <>
                      <Link to="signin" onClick={disappearmodal}>
                        sign in
                      </Link>
                      <Link to="signup" onClick={disappearmodal}>
                        sign up
                      </Link>
                    </>
                  )}
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
