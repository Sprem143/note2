import { Outlet, Link } from "react-router-dom";
// import "./Jnavbar.css";
import JavaHome from "./JavaHome";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
export default function Jnavbar() {
  return (
    <>
      <nav className="jnav">
        <ul className="jlinks-container jnav-desktop">
          {/* --------------coresol------------------ */}

          <Carousel fade indicators={false} touch={true} interval={null} >
            {/* ------Slide 01 ------------- */}
            <Carousel.Item className="jtopic-slide">
              <li>
                <Link to="accessmodifier">Access Modifier</Link>
              </li>
              <li>
                <Link to="array">Array</Link>
              </li>
              <li>
                <Link to="languagefundamental">Fundamental</Link>
              </li>
              <li>
                <Link to="datatype">Data Type</Link>
              </li>

              <li>
                <Link to="variable">Variable</Link>
              </li>
              <li>
                <Link to="vararg"> Var-args Method</Link>
              </li>
            </Carousel.Item>
            {/* ---------------slide II------------- */}
            <Carousel.Item className="jtopic-slide">
              <li>
                <Link to="mainmethod">Main Method</Link>
              </li>
              <li>
                <Link to="commandlinearg"> Command Line Argument</Link>
              </li>
              <li>
                <Link to="codingstandard">Java Coding Standard</Link>
              </li>
              <li>
                <Link to="operatorassignment">Operator & Assignment</Link>
              </li>
              <li>
                <Link to="flowcontrol">Flow Control</Link>
              </li>
             
            </Carousel.Item>
            {/* --------------slide III---------------- */}
            <Carousel.Item className="jtopic-slide">
            <li>
                <Link to="declaration">Declaration</Link>
              </li>
              <li>
                <Link to="accessmodifier">Access Modifier</Link>
              </li>
              <li>
                <Link to="interface">Interface</Link>
              </li>
              <li>
                <Link to="opps">OPPS</Link>
              </li>
              <li>
                <Link to="multithreading">Multithreading</Link>
              </li>
              <li>
                <Link to="collection">Collection</Link>
              </li>
            </Carousel.Item>
          </Carousel>
        </ul>

        {/* mobile jnav */}
        <ul className="jlinks-container jnav-mobile">
          {/* --------------coresol------------------ */}

          <Carousel fade indicators={false} touch={true} interval={null} >
            {/* ------Slide 01 ------------- */}
            <Carousel.Item className="jtopic-slide">
              <li>  <Link to="accessmodifier">Access Modifier</Link> </li>
              <li> <Link to="array">Array</Link> </li>
              <li>  <Link to="languagefundamental">Fundamental</Link> </li> 
              <li>   <Link to="datatype">Data Type</Link> </li>
              </Carousel.Item>
            {/* ---------------slide II------------- */}
            <Carousel.Item className="jtopic-slide">
              <li> <Link to="variable">Variable</Link> </li>
              <li> <Link to="vararg"> Var-args Method</Link> </li>
              <li> <Link to="mainmethod">Main Method</Link> </li>
              <li> <Link to="commandlinearg"> Command Line Argument</Link> </li>
              </Carousel.Item>
            {/* ---------------slide II------------- */}
            <Carousel.Item className="jtopic-slide">
              <li>  <Link to="codingstandard">Coding Standard</Link> </li>
              <li><Link to="operatorassignment">Operator&Assignment</Link> </li>
              <li> <Link to="flowcontrol">Flow Control</Link></li>
              <li><Link to="declaration">Declaration</Link></li>
            </Carousel.Item>
            {/* --------------slide III---------------- */}
            <Carousel.Item className="jtopic-slide">  
              <li> <Link to="accessmodifier">Access Modifier</Link></li>  
              <li> <Link to="interface">Interface</Link> </li> 
              <li><Link to="opps">OPPS</Link></li>     
              <li><Link to="multithreading">Multithreading</Link> </li>
              </Carousel.Item>
            {/* --------------slide III---------------- */}
            <Carousel.Item className="jtopic-slide">  
              <li>
                <Link to="collection">Collection</Link>
              </li>
            </Carousel.Item>
          </Carousel>
        </ul>
      </nav>
      <Outlet />
      <JavaHome/>
    </>
  );
}
