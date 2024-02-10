import { Outlet, Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../java/Jnavbar.css"
export default function Htmlnavbar() {
  return (
    <>
      <nav className="jnav">
        <ul className="jlinks-container jnav-desktop">
          {/* --------------coresol------------------ */}

          <Carousel fade indicators={false} touch={true} interval={null}>
            {/* ------Slide 01 ------------- */}
            <Carousel.Item className="jtopic-slide">
              <li>
                <Link to="basic">Basic</Link>
              </li>
              <li>
                <Link to="element">Element</Link>
              </li>
              <li>
                <Link to="attribute">Attribute</Link>
              </li>
              <li>
                <Link to="heading">Heading</Link>
              </li>

              <li>
                <Link to="paragraph">Paragraph</Link>
              </li>
              <li>
                <Link to="style"> Style</Link>
              </li>
            </Carousel.Item>
            {/* ---------------slide II------------- */}
            <Carousel.Item className="jtopic-slide">
              <li>
                <Link to="formatting">Formatting</Link>
              </li>
              <li>
                <Link to="quotation">Quotation</Link>
              </li>
              <li>
                <Link to="comment">Comment</Link>
              </li>
              <li>
                <Link to="color">Color</Link>
              </li>
              <li>
                <Link to="css">CSS</Link>
              </li>
              <li>
                <Link to="link">Link</Link>
              </li>
            </Carousel.Item>
            {/* --------------slide III---------------- */}
            <Carousel.Item className="jtopic-slide">
              <li>
                <Link to="image">Image</Link>
              </li>
              <li>
                <Link to="favicon">Favicon</Link>
              </li>
              <li>
                <Link to="pagetitle">Page-Title</Link>
              </li>
              <li>
                <Link to="table">Table</Link>
              </li>
              <li>
                <Link to="list">List</Link>
              </li>
              <li>
                <Link to="blockinline">Block & Inline</Link>
              </li>
            </Carousel.Item>
            {/* slide IV */}
            <Carousel.Item className="jtopic-slide">
              <li>
                <Link to="div">Div</Link>
              </li>
              <li>
                <Link to="Classid">Class & Id</Link>
              </li>
              <li>
                <Link to="iframe">Iframe</Link>
              </li>
              <li>
                <Link to="javascript">JavaScript</Link>
              </li>
              <li>
                <Link to="filepath">File Path</Link>
              </li>
              <li>
                <Link to="head">Head</Link>
              </li>
            </Carousel.Item>
            {/* slide V */}
            <Carousel.Item className="jtopic-slide">
            <li>
                <Link to="layout">Layout</Link>
              </li>
              <li>
                <Link to="responsive">Responsive</Link>
              </li>
              <li>
                <Link to="computercode">Computercode</Link>
              </li>
              <li>
                <Link to="semantic">Semantic</Link>
              </li>
              <li>
                <Link to="entity">Entity</Link>
              </li>
              <li>
                <Link to="symbolemoji">Symbol & Emoji</Link>
              </li>
            </Carousel.Item>
{/* slide VI */}
            <Carousel.Item className="jtopic-slide">
            <li>
                <Link to="charset">Charset</Link>
              </li>
              <li>
                <Link to="htmlvxhtml">HTML vs XHTML</Link>
              </li>
              <li>
                <Link to=""></Link>
              </li>
              <li>
                <Link to=""></Link>
              </li>
              <li>
                <Link to=""></Link>
              </li>
              <li>
                <Link to=""></Link>
              </li>
            </Carousel.Item>
          </Carousel>
        </ul>

        {/* mobile jnav */}
        <ul className="jlinks-container jnav-mobile">
          {/* --------------coresol------------------ */}

          <Carousel fade indicators={false} touch={true} interval={null}>
            {/* ------Slide 01 ------------- */}
            <Carousel.Item className="jtopic-slide">
            <li>
                <Link to="basic">Basic</Link>
              </li>
              <li>
                <Link to="element">Element</Link>
              </li>
              <li>
                <Link to="attribute">Attribute</Link>
              </li>
              <li>
                <Link to="heading">Heading</Link>
              </li>
            </Carousel.Item>
            {/* ---------------slide II------------- */}
            <Carousel.Item className="jtopic-slide">
            <li>
                <Link to="paragraph">Paragraph</Link>
              </li>
              <li>
                <Link to="style"> Style</Link>
              </li>
              <li>
                <Link to="formatting">Formatting</Link>
              </li>
              <li>
                <Link to="quotation">Quotation</Link>
              </li>
            </Carousel.Item>
            {/* ---------------slide II------------- */}
            <Carousel.Item className="jtopic-slide">
            <li>
                <Link to="comment">Comment</Link>
              </li>
              <li>
                <Link to="color">Color</Link>
              </li>
              <li>
                <Link to="css">CSS</Link>
              </li>
              <li>
                <Link to="link">Link</Link>
              </li>
            </Carousel.Item>
            {/* --------------slide III---------------- */}
            <Carousel.Item className="jtopic-slide">
            <li>
                <Link to="image">Image</Link>
              </li>
              <li>
                <Link to="favicon">Favicon</Link>
              </li>
              <li>
                <Link to="pagetitle">Page-Title</Link>
              </li>
              <li>
                <Link to="table">Table</Link>
              </li>
            </Carousel.Item>
            {/* --------------slide III---------------- */}
            <Carousel.Item className="jtopic-slide">
            <li>
                <Link to="list">List</Link>
              </li>
              <li>
                <Link to="blockinline">Block & Inline</Link>
              </li>
              <li>
                <Link to="div">Div</Link>
              </li>
              <li>
                <Link to="Classid">Class & Id</Link>
              </li>
            </Carousel.Item>
            {/* SLIDE iv */}
            <Carousel.Item className="jtopic-slide">
            <li>
                <Link to="iframe">Iframe</Link>
              </li>
              <li>
                <Link to="javascript">JavaScript</Link>
              </li>
              <li>
                <Link to="filepath">File Path</Link>
              </li>
              <li>
                <Link to="head">Head</Link>
              </li>
              </Carousel.Item>
              {/* SLIDE V */}
              <Carousel.Item className="jtopic-slide">
              <li>
                <Link to="layout">Layout</Link>
              </li>
              <li>
                <Link to="responsive">Responsive</Link>
              </li>
              <li>
                <Link to="computercode">Computercode</Link>
              </li>
              <li>
                <Link to="semantic">Semantic</Link>
              </li>
              </Carousel.Item>
              {/* SLIDE VI */}
              <Carousel.Item className="jtopic-slide">
              <li>
                <Link to="entity">Entity</Link>
              </li>
              <li>
                <Link to="symbolemoji">Symbol & Emoji</Link>
              </li>
              <li>
                <Link to="charset">Charset</Link>
              </li>
              <li>
                <Link to="htmlvxhtml">HTML vs XHTML</Link>
              </li>
              </Carousel.Item>
             
          </Carousel>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
