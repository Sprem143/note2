import { Outlet, Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../java/Jnavbar.css"
import './React.module.css'
export default function Reactnavbar() {
  return (
    <>
      <nav className="jnav">
        <ul className="jlinks-container jnav-desktop">
          {/* --------------coresol------------------ */}

          <Carousel fade indicators={false} touch={true} interval={null}>
            {/* ------Slide 01 ------------- */}
            <Carousel.Item className="jtopic-slide">
              <li> <Link to="basic">Basic </Link> </li>
              <li> <Link to="createreactapp">Create-React-App </Link> </li>
              <li> <Link to="es6">ES6 </Link> </li>
              <li> <Link to="renderhtml">Render-HTML </Link> </li>
              <li> <Link to="jsx">JSX </Link> </li>
              <li> <Link to="component">Component </Link> </li>
            </Carousel.Item>

            {/* slide II */}
            <Carousel.Item className="jtopic-slide">
              <li> <Link to="class">Class </Link> </li>
              <li> <Link to="prop">Prop </Link> </li>
              <li> <Link to="event">Event </Link> </li>
              <li> <Link to="conditional">Conditional </Link> </li>
              <li> <Link to="list">List </Link> </li>
              <li> <Link to="form">Form </Link> </li>
            </Carousel.Item>
            {/* slide III */}
            <Carousel.Item className="jtopic-slide">
              <li> <Link to="router">Router </Link> </li>
              <li> <Link to="memo">Memo </Link> </li>
              <li> <Link to="cssstyling">CSS styling </Link> </li>
              <li> <Link to="sassstyling">SASS Styling </Link> </li>
              <li> <Link to="hook">Hooks </Link> </li>
              <li> <Link to="usestate">useState </Link> </li>
            </Carousel.Item>
            {/* slide IV */}
            <Carousel.Item className="jtopic-slide">
              <li> <Link to="useeffect">useEffect </Link> </li>
              <li> <Link to="usecontext">useContext </Link> </li>
              <li> <Link to="useref">useRef </Link> </li>
              <li> <Link to="usereducer">useReducer </Link> </li>
              <li> <Link to="usecallback">useCallback </Link> </li>
            </Carousel.Item>

            <Carousel.Item className="jtopic-slide">
              <li> <Link to="usememo">useMemo </Link> </li>
              <li> <Link to="customhook">Custom Hooks </Link> </li>
             
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
              <li> <Link to="upgrade">Upgrade </Link> </li>
              <li> <Link to="es6">ES6 </Link> </li>
              <li> <Link to="renderhtml">Render-HTML </Link> </li>
            </Carousel.Item>
            {/* ---------------slide II------------- */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="jsx">JSX </Link> </li>
              <li> <Link to="component">Component </Link> </li>
              <li> <Link to="class">Class </Link> </li>
              <li> <Link to="prop">Prop </Link> </li>
            </Carousel.Item>
            {/* ---------------slide II------------- */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="event">Event </Link> </li>
              <li> <Link to="conditional">Conditional </Link> </li>
              <li> <Link to="list">List </Link> </li>
              <li> <Link to="form">Form </Link> </li>
            </Carousel.Item>
            {/* --------------slide III---------------- */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="router">Router </Link> </li>
              <li> <Link to="memo">Memo </Link> </li>
              <li> <Link to="cssstyling">CSS styling </Link> </li>
              <li> <Link to="sassstyling">SASS Styling </Link> </li>
            </Carousel.Item>
            {/* --------------slide III---------------- */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="hook">Hooks </Link> </li>
              <li> <Link to="usestate">useState </Link> </li>
              <li> <Link to="useeffect">useEffect </Link> </li>
              <li> <Link to="usecontext">useContext </Link> </li>
            </Carousel.Item>
            {/* SLIDE iv */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="useref">useRef </Link> </li>
              <li> <Link to="usereducer">useReducer </Link> </li>
              <li> <Link to="usecallback">useCallback </Link> </li>
            </Carousel.Item>
            {/* SLIDE V */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="usememo">useMemo </Link> </li>
              <li> <Link to="customhook">Custom Hooks </Link> </li>
            </Carousel.Item>
            {/* SLIDE VI */}
            <Carousel.Item className="jtopic-slide">

            </Carousel.Item>
          </Carousel>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
