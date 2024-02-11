import { Outlet, Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../java/Jnavbar.css"
export default function Pynavbar() {
  return (
    <>
      <nav className="jnav">
        <ul className="jlinks-container jnav-desktop">
          {/* --------------coresol------------------ */}

          <Carousel fade indicators={false} touch={true} interval={null}>
            {/* ------Slide 01 ------------- */}
            <Carousel.Item className="jtopic-slide">
              <li> <Link to="numpy">Numpy </Link> </li>
              <li> <Link to="panda">Panda </Link> </li>
              <li> <Link to="seaborn">Seaborn </Link> </li>
              <li> <Link to="Matlibplot">Matlibplot </Link> </li>
              <li> <Link to="Machine Learning">Comment </Link> </li>
              <li> <Link to="Deep Learning">Variable </Link> </li>
            </Carousel.Item>

            {/* slide II */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="numpy">Numpy </Link> </li>
              <li> <Link to="panda">Panda </Link> </li>
              <li> <Link to="seaborn">Seaborn </Link> </li>
              <li> <Link to="Matlibplot">Matlibplot </Link> </li>
              <li> <Link to="Machine Learning">Comment </Link> </li>
              <li> <Link to="Deep Learning">Variable </Link> </li>
            </Carousel.Item>
            {/* slide III */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="numpy">Numpy </Link> </li>
              <li> <Link to="panda">Panda </Link> </li>
              <li> <Link to="seaborn">Seaborn </Link> </li>
              <li> <Link to="Matlibplot">Matlibplot </Link> </li>
              <li> <Link to="Machine Learning">Comment </Link> </li>
              <li> <Link to="Deep Learning">Variable </Link> </li>
            </Carousel.Item>
            {/* slide IV */}
            <Carousel.Item className="jtopic-slide">
            <li> <Link to="numpy">Numpy </Link> </li>
              <li> <Link to="panda">Panda </Link> </li>
              <li> <Link to="seaborn">Seaborn </Link> </li>
              <li> <Link to="Matlibplot">Matlibplot </Link> </li>
              <li> <Link to="Machine Learning">Comment </Link> </li>
              <li> <Link to="Deep Learning">Variable </Link> </li>
            </Carousel.Item>

            <Carousel.Item className="jtopic-slide">
              
            </Carousel.Item>

            <Carousel.Item className="jtopic-slide">
           
            </Carousel.Item>

            <Carousel.Item className="jtopic-slide">
             
            </Carousel.Item>

          </Carousel>
        </ul>

        {/* mobile jnav */}
        <ul className="jlinks-container jnav-mobile">
          {/* --------------coresol------------------ */}

          <Carousel fade indicators={false} touch={true} interval={null}>
            {/* ------Slide 01 ------------- */}
            <Carousel.Item className="jtopic-slide">
           
            </Carousel.Item>
            {/* ---------------slide II------------- */}
            <Carousel.Item className="jtopic-slide">
           
            </Carousel.Item>
            {/* ---------------slide III------------- */}
            <Carousel.Item className="jtopic-slide">
           
            </Carousel.Item>
            {/* --------------slide IV---------------- */}
            <Carousel.Item className="jtopic-slide">
         
            </Carousel.Item>
            {/* --------------slide V---------------- */}
            <Carousel.Item className="jtopic-slide">
           
            </Carousel.Item>
            {/* SLIDE VI */}
            <Carousel.Item className="jtopic-slide">
           
            </Carousel.Item>
            {/* SLIDE VII */}
            <Carousel.Item className="jtopic-slide">
          
            </Carousel.Item>
            {/* SLIDE VIII */}
            <Carousel.Item className="jtopic-slide">
            
            </Carousel.Item>
             {/* SLIDE IX */}
             <Carousel.Item className="jtopic-slide">
            
            </Carousel.Item>
              {/* SLIDE X */}
          
           
          </Carousel>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
