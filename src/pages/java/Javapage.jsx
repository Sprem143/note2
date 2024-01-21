import { Outlet, Link } from "react-router-dom";
import "./jnavbar.css";
export default function Javapage(){
      function showoption() {
        document.getElementById("option-container").style.marginLeft = "0";
        console.log("hello");
      }
      //------------- dismiss funtion-----------
      function dismiss() {
        document.getElementById("option-container").style.marginLeft = "-200px";
      }
      return (
        <>
          <nav>
            {/* desktop navbar */}
            <div className="jnav1">
              <ul className="jlinks-container">
                <li>
                  <Link to="/">java1</Link>
                </li>
                <li>
                  <Link to="/html">java2</Link>
                </li>
                <li>
                  <Link to="/css">java3</Link>
                </li>
                <li>
                  <Link to="/java">JAva4</Link>
                </li>
                <li>
                  <Link to="/react">REACT</Link>
                </li>
              </ul>
            </div>
    
            {/* mobile navbar */}
            <div className="jnav2">
              {/* -----------------------menu icons*----------------------*/}
              <div className="jmenu-icon" onClick={showoption}>
                <svg
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
              </div>
              {/* onlclik display options */}             
            </div>
          </nav>
          <div className="joption-body" id="option-container">
            <div id="option-dismiss" onClick={dismiss}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-bar-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
                />
              </svg>
            </div>
            {/* Menu links */}
            <ul>
              <li className="jlinkstyle">
                <Link to="/html" onClick={dismiss}>HTML</Link>
              </li>
              <li className="jlinkstyle">
                <Link to="/css" onClick={dismiss}>CSS</Link>
              </li>
              <li className="jlinkstyle">
                <Link to="/java" onClick={dismiss}>JAVA</Link>
              </li>
              <li className="jlinkstyle">
                <Link to="/react" onClick={dismiss}>REACT</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      );
    }
    