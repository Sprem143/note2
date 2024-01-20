import { Outlet, Link } from "react-router-dom";
export default function Navbar(){
    return(
    <>
      <nav>
        <ul> <li>
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
        </ul>
      </nav>
      <Outlet />
    </>
     )
}