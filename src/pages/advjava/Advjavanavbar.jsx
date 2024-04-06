import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import "../java/Jnavbar.css"
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
export default function advjavanavbar() {
    const [clickedLink, setClickedLink] = useState("white");
    const handleLinkClick = (link) => {
        setClickedLink(link);
    }
    return (
        <>
            <nav className="jnav">
                <ul className="jlinks-container jnav-desktop">
                    {/* --------------coresol------------------ */}

                    <Carousel fade indicators={false} touch={true} interval={null} >
                        {/* ------Slide 01 ------------- */}
                        <Carousel.Item className="jtopic-slide">
                            <li>
                                <Link to="driver" style={{ color: clickedLink == 'driver' ? 'red' : 'white' }}
                                    onClick={() => handleLinkClick('driver')}>Driver</Link>
                            </li>
                            <li>
                                <Link to="advjava" style={{ color: clickedLink == 'advjava' ? 'red' : 'white' }}
                                    onClick={() => handleLinkClick('advjava')}>Advance Java</Link>
                            </li>
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

                    </Carousel>
                </ul>
            </nav>
        </>
    )
}