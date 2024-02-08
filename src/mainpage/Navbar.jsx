import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
export default function Navbar() {
  function changeTheme() {
    let colore = document.getElementById("exampleColorInput").value;
    document.getElementById("nave").style.backgroundColor = colore;
    document.getElementsByTagName("root").style.backgroundColor = colore;
  }
  const [showac, setShowac] = useState(false);
  const handleCloseac = () => setShowac(false);
  const handleShowac = () => setShowac(true);
  // for sidebar option
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav>
        {/* back ground change */}
        <div id="theme">
          <span>Theme</span>
          <input
            type="color"
            onInput={changeTheme}
            class="form-control form-control-color"
            id="exampleColorInput"
            value="#FFFDD0"
            title="Choose your color"
          ></input>
        </div>
        {/* -----------------------menu icons*----------------------*/}
        <div className="menu-icon" >
          <svg onClick={handleShow}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="24"
            fill="white"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </Offcanvas>
      
        </div>
        <div className="nav1">
          <ul className="links-container" id="nave">
            <li>
              <img
                className="round-img"
                src="/static/images/logo.png"
                alt="logo"
                height="60"
              />
            </li>
            <li>
              <Link to="/python">Python</Link>
            </li>
            <li>
              <Link to="/html">HTML</Link>
            </li>
            <li>
              <Link to="/css">CSS</Link>
            </li>
            <li>
              <Link to="/java">JAVA</Link>
            </li>
            <li>
              <Link to="/react">REACT</Link>
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
                    <Modal.Footer>Website Designer</Modal.Footer>
                  </div>
                </Modal>
              </div>
            </li>
          </ul>
        </div>

        {/* mobile navbar */}
        <div className="nav2">
          {/* onlclik display options */}

          {/*---------------------- mobile logo---------------------- */}
          <div className="logo">
            <img
              className="round-img"
              src="/static/images/logo.png"
              alt="logo"
              height="60"
            />
          </div>
          <h4>Welcome to Programming</h4>
          {/* -----------------------account ------------------------------- */}
          <div className="account">
            <img
              src="/static/images/account.png"
              alt="account"
              className="round-img account2"
              height="60"
            />
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
