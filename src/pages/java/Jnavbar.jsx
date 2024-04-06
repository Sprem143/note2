import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import "./Jnavbar.css";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
export default function Jnavbar() {
  const [clickedLink, setClickedLink] = useState("white");
  const handleLinkClick = (link) => {
    setClickedLink(link);}
  return (
    <>
      <nav className="jnav">
        <ul className="jlinks-container jnav-desktop">
          {/* --------------coresol------------------ */}

          <Carousel fade indicators={false} touch={true} interval={null} >
            {/* ------Slide 01 ------------- */}
            <Carousel.Item className="jtopic-slide">
            <li>
                <Link to="jdbc" style={{ color: clickedLink == 'jdbc' ? 'red' : 'white' }}
        onClick={() => handleLinkClick('jdbc')}>JDBC</Link>
              </li>
              {/* <li>
                <Link to="advjava" style={{ color: clickedLink == 'advjava' ? 'red' : 'white' }}
        onClick={() => handleLinkClick('advjava')}>Advance Java</Link>
              </li> */}
              <li>
                <Link to="accessmodifier" style={{ color: clickedLink == 'accessmodifier' ? 'red' : 'white' }}
        onClick={() => handleLinkClick('accessmodifier')}>Access Modifier</Link>
              </li>
              <li>
                <Link to="languagefundamental" style={{ color: clickedLink == 'lf' ? 'red' : 'white' }}
        onClick={() => handleLinkClick('lf')}>Language-Fundamental</Link>
              </li>
              <li>
                <Link to="datatype" style={{ color: clickedLink == 'dt' ? 'red' : 'white' }}
        onClick={() => handleLinkClick('dt')}>Data Type</Link>
              </li>
            </Carousel.Item>
            {/* --------extra links paste here--------- */}

            <Carousel.Item className="jtopic-slide">
            <li>
                <Link to="array"  style={{ color: clickedLink == 'array' ? 'red' : 'white' }}
        onClick={() => handleLinkClick('array')}>Array</Link>
              </li>
           
              <li>
                <Link to="vararg" style={{ color: clickedLink == 'vararg' ? 'red' : 'white' }}
        onClick={() => handleLinkClick('vararg')}>Var-args Method</Link>
              </li>
              <li>
                <Link to="variable"  style={{ color: clickedLink == 'variable' ? 'red' : 'white' }}
        onClick={() => handleLinkClick('variable')}>Variable</Link>
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
            <li>
                <Link to="jdbc" style={{ color: clickedLink == 'jdbc' ? 'red' : 'white' }}
        onClick={() => handleLinkClick('jdbc')}>JDBC</Link>
              </li>              <li>
                <Link to="advjava" style={{ color: clickedLink == 'advjava' ? 'red' : 'white' }}
        onClick={() => handleLinkClick('advjava')}>Advance Java</Link>
              </li>             
               <li>  <Link to="languagefundamental">Fundamental</Link> </li> 
              <li>   <Link to="datatype">Data Type</Link> </li>
              </Carousel.Item>
              {/* exptra link  paste above */}
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
    </>
  );
  }
