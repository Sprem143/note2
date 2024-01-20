import { Outlet, Link } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav>
        {/* desktop navbar */}
        <div className="nav1">
          <ul className="links-container">
            <li>
                <img className="round-img" src="src\assets\images\logo.png" alt="logo" height='60'  />
            </li>
            <li>
              <Link to="/">Home</Link>
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
                    <img src="src\assets\images\account.png" alt="account" className="round-img" height='60' />
              </div>
            </li>
          </ul>
        </div>

        {/* mobile navbar */}
        <div className="nav2">
          <div className="menu-icon"></div>
          <div className="logo"></div>
          <div className="account"></div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
