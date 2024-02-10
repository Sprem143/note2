import { Outlet, Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../java/Jnavbar.css"
export default function Jsnavbar() {
  return (
    <>
      <nav className="jnav">
        <ul className="jlinks-container jnav-desktop">
          {/* --------------coresol------------------ */}

          <Carousel fade indicators={false} touch={true} interval={null}>
            {/* ------Slide 01 ------------- */}
            <Carousel.Item className="jtopic-slide">
              <li> <Link to="basic">Basic </Link> </li>
              <li> <Link to="output">Output </Link> </li>
              <li> <Link to="statement">Statement </Link> </li>
              <li> <Link to="syntax">Syntax </Link> </li>
              <li> <Link to="comment">Comment </Link> </li>
              <li> <Link to="variable">Variable </Link> </li>
            </Carousel.Item>

            {/* slide II */}
            <Carousel.Item className="jtopic-slide">
              <li> <Link to="letconst">Let & Const </Link> </li>
              <li> <Link to="operator">Operator </Link> </li>
              <li> <Link to="arithmetic">Arithmetic </Link> </li>
              <li> <Link to="assignment">Assignment </Link> </li>
              <li> <Link to="datatype">Data Type </Link> </li>
              <li> <Link to="function">Function </Link> </li>
            </Carousel.Item>
            {/* slide III */}
            <Carousel.Item className="jtopic-slide">
              <li> <Link to="object">Object </Link> </li>
              <li> <Link to="event">Event </Link> </li>
              <li> <Link to="string">String </Link> </li>
              <li> <Link to="number">Number </Link> </li>
              <li> <Link to="array">Array </Link> </li>
              <li> <Link to="date">Date </Link> </li>
            </Carousel.Item>
            {/* slide IV */}
            <Carousel.Item className="jtopic-slide">
              <li> <Link to="math">Math </Link> </li>
              <li> <Link to="ifelse">If else </Link> </li>
              <li> <Link to="switch">Switch </Link> </li>
              <li> <Link to="loop">Loop </Link> </li>
              <li> <Link to="break">Break </Link> </li>
              <li> <Link to="iterable">Iterable </Link> </li>
            </Carousel.Item>

            <Carousel.Item className="jtopic-slide">
              <li> <Link to="set">Set </Link> </li>
              <li> <Link to="map">Map </Link> </li>
              <li> <Link to="type"> Type</Link> </li>
              <li> <Link to="bitwise">Bitwise </Link> </li>
              <li> <Link to="regexp">RegExp </Link> </li>
              <li> <Link to="precedence">Precedence </Link> </li>
            </Carousel.Item>

            <Carousel.Item className="jtopic-slide">
              <li> <Link to="error">Error </Link> </li>
              <li> <Link to="scope">Scope </Link> </li>
              <li> <Link to="hoisting">Hoisting </Link> </li>
              <li> <Link to="strictmode"> Strict Mode</Link> </li>
              <li> <Link to="this">This Keyword </Link> </li>
              <li> <Link to="arrow">Arrow Function </Link> </li>
            </Carousel.Item>

            <Carousel.Item className="jtopic-slide">
              <li> <Link to="classmodule">Class & Module </Link> </li>
              <li> <Link to="json">JSON </Link> </li>
            </Carousel.Item>

          </Carousel>
        </ul>

        {/* mobile jnav */}
        <ul className="jlinks-container jnav-mobile">
          {/* --------------coresol------------------ */}

          <Carousel fade indicators={false} touch={true} interval={null}>
            {/* ------Slide 01 ------------- */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="basic">Basic </Link> </li>
              <li> <Link to="output">Output </Link> </li>
              <li> <Link to="statement">Statement </Link> </li>
              <li> <Link to="syntax">Syntax </Link> </li>
            </Carousel.Item>
            {/* ---------------slide II------------- */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="comment">Comment </Link> </li>
              <li> <Link to="variable">Variable </Link> </li>
              <li> <Link to="letconst">Let & Const </Link> </li>
              <li> <Link to="operator">Operator </Link> </li>
            </Carousel.Item>
            {/* ---------------slide III------------- */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="arithmetic">Arithmetic </Link> </li>
              <li> <Link to="assignment">Assignment </Link> </li>
              <li> <Link to="datatype">Data Type </Link> </li>
              <li> <Link to="function">Function </Link> </li>
            </Carousel.Item>
            {/* --------------slide IV---------------- */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="object">Object </Link> </li>
              <li> <Link to="event">Event </Link> </li>
              <li> <Link to="string">String </Link> </li>
              <li> <Link to="number">Number </Link> </li>
            </Carousel.Item>
            {/* --------------slide V---------------- */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="array">Array </Link> </li>
              <li> <Link to="date">Date </Link> </li>
              <li> <Link to="math">Math </Link> </li>
              <li> <Link to="ifelse">If else </Link> </li>
            </Carousel.Item>
            {/* SLIDE VI */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="switch">Switch </Link> </li>
              <li> <Link to="loop">Loop </Link> </li>
              <li> <Link to="break">Break </Link> </li>
              <li> <Link to="iterable">Iterable </Link> </li>
            </Carousel.Item>
            {/* SLIDE VII */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="set">Set </Link> </li>
              <li> <Link to="map">Map </Link> </li>
              <li> <Link to="type"> Type</Link> </li>
              <li> <Link to="bitwise">Bitwise </Link> </li>
            </Carousel.Item>
            {/* SLIDE VIII */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="regexp">RegExp </Link> </li>
              <li> <Link to="precedence">Precedence </Link> </li>
              <li> <Link to="error">Error </Link> </li>
              <li> <Link to="scope">Scope </Link> </li>
            </Carousel.Item>
             {/* SLIDE IX */}
             <Carousel.Item className="jtopic-slide">
             <li> <Link to="hoisting">Hoisting </Link> </li>
              <li> <Link to="strictmode"> Strict Mode</Link> </li>
              <li> <Link to="this">This Keyword </Link> </li>
              <li> <Link to="arrow">Arrow Function </Link> </li>
            </Carousel.Item>
              {/* SLIDE X */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="classmodule">Class & Module </Link> </li>
              <li> <Link to="json">JSON </Link> </li>
            </Carousel.Item>
           
          </Carousel>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
