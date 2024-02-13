import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
export default function Navbar() {
  const [showac, setShowac] = useState(false);
  const handleCloseac = () => setShowac(false);
  const handleShowac = () => setShowac(true);
  // for sidebar option
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [clickedLink, setClickedLink] = useState(null);
  const handleLinkClick = (link) => {
    setClickedLink(link);
  };
  function disappearmodal(){
    document.getElementsByClassName("acnt-model")[1].style.display="hidden"
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
              <Offcanvas.Title>Welcome Prem</Offcanvas.Title>
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
                </Modal.Body>
                <Modal.Footer className="authentication">
                  <Link to="signin" onClick={disappearmodal}>sign in</Link>
                  <Link to="signup" onClick={disappearmodal}>sign up</Link>
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
