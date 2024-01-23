import { Outlet, Link } from "react-router-dom";

import './Cssnavbar.css'
import Carousel from "react-bootstrap/Carousel";
export default function Cssnavbar(){
  return (
    <>
      <nav className="cssnav">
        <ul className="csslinks-container cssnav-desktop">
          {/* --------------coresol------------------ */}

          <Carousel fade indicators={false} touch={true} interval={null}>
            {/* ------Slide 01 ------------- */}
            <Carousel.Item className="csstopic-slide">
              <li> <Link to="syntax" >Syntax </Link></li>
              <li> <Link to="selector">Selector</Link></li>
              <li> <Link to="color">Color </Link></li>
              <li> <Link to="background">Background </Link></li>
              <li> <Link to="border">Border</Link></li>
              <li> <Link to="margin" > Margin</Link></li>

            </Carousel.Item>
            {/* ---------------slide II------------- */}
            <Carousel.Item className="csstopic-slide">
            <li> <Link to="padding" >Padding </Link></li>
            <li> <Link to="heightwidth" >Hight-width </Link></li>
            <li> <Link to="boxmodel" >Box Model </Link></li>
            <li> <Link to="outline" > Outline</Link></li>
            <li> <Link to="text" >Text </Link></li>
            <li> <Link to="font" > Font</Link></li>
              
            </Carousel.Item>
            {/* --------------slide III---------------- */}
            <Carousel.Item className="csstopic-slide">
            <li> <Link to="icon" >Icon </Link></li>
            <li> <Link to="link" > Link</Link></li>
            <li> <Link to="list" >List </Link></li>
            <li> <Link to="table">Table </Link></li>
            <li> <Link to="display" >Display </Link></li>
            <li> <Link to="maxwidth" >Max-width </Link></li>
            </Carousel.Item>

             {/* --------------slide IV--------------- */}
             <Carousel.Item className="csstopic-slide">
            <li> <Link to="position" >Position </Link></li>
            <li> <Link to="zindex">Z-index</Link></li>
            <li> <Link to="overflow">Overflow</Link></li>
            <li> <Link to="float">Float</Link></li>
            <li> <Link to="inlineblock">Inline-block</Link></li>
            <li> <Link to="align">Align</Link></li>
            </Carousel.Item>
{/* ------------------silde V------------- */}
            <Carousel.Item className="csstopic-slide">
            <li> <Link to="combitor" >Combinator </Link></li>
            <li> <Link to="pseudoclass">Pseudo-class</Link></li>
            <li> <Link to="pseudoelement">Pseudo-element</Link></li>
            <li> <Link to="opacity">Opacity</Link></li>
            <li> <Link to="navigation">Navigation Bar</Link></li>
            <li> <Link to="dropdown">Dropdown</Link></li>
            </Carousel.Item>
{/* ----------Slide VI-------------- */}
            <Carousel.Item className="csstopic-slide">
            <li> <Link to="form" >Form </Link></li>
            <li> <Link to="mathfunction"> Math Function</Link></li>
            <li> <Link to=""></Link></li>
            <li> <Link to=""></Link></li>
            <li> <Link to=""></Link></li>
            <li> <Link to=""></Link></li>
            </Carousel.Item>
          </Carousel>
        </ul>

        {/* mobile cssnav */}
        <ul className="csslinks-container cssnav-mobile">
          {/* --------------coresol------------------ */}

          <Carousel fade indicators={false} touch={true} interval={null}>
            {/* ------Slide 01 ------------- */}
            <Carousel.Item className="csstopic-slide"></Carousel.Item>
            {/* ---------------slide II------------- */}
            <Carousel.Item className="csstopic-slide"></Carousel.Item>
            {/* ---------------slide III------------- */}
            <Carousel.Item className="csstopic-slide"></Carousel.Item>
            {/* --------------slide IV---------------- */}
            <Carousel.Item className="csstopic-slide"></Carousel.Item>
            {/* --------------slide V---------------- */}
            <Carousel.Item className="csstopic-slide">
              
            </Carousel.Item>
          </Carousel>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
