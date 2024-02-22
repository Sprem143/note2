import "./Home.css";
import "/src/App.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Navbar from "./Navbar";
export default function Home() {
  const[studentName,setName]=useState("user");
  useEffect(() => {
    const storedName = localStorage.getItem('student');
    if (storedName) {
      let nam= JSON.parse(storedName).name;
      setName(nam);
    }
  }, []);
  return (
    
      <div className="container-fluid body-home lyout" id="fsm">
        <div>
          <h1>
            <b className="text-danger hd"> Welcome {studentName}</b>
          </h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Are you ready to
            embark on an exciting journey into the world of coding and
            programming languages? Look no further! [Your Website Name] is here
            to guide you through every step of your programming adventure.
          </p>
          <h3>What Makes Us Special?</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At my website, we
            understand that starting with programming can be both thrilling and
            challenging. Our mission is to make your learning experience smooth,
            enjoyable, and effective. Here's what sets us apart:Here you can
            also change theme of website according to your choice.
          </p>
       
          <h3>Comprehensive Learning Resources:</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether you're
            diving into the fundamentals of Java, exploring the magic of Python,
            crafting dynamic web pages with HTML, CSS, and JavaScript, or
            building interactive interfaces with React, we've got you covered.
            Our extensive collection of notes provides clear explanations,
            real-world examples, and hands-on exercises to reinforce your
            understanding.
          </p>
          <h3>Structured Learning Paths:</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We believe in a
            step-by-step approach to programming. Our structured learning paths
            guide you from beginner to proficient in a logical sequence,
            ensuring you build a strong foundation before moving on to more
            advanced concepts.
          </p>
       
          <h3> Interactive Coding Challenges:</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Put your newfound
            knowledge to the test with our interactive coding challenges. These
            hands-on exercises help reinforce your skills and boost your
            confidence in solving real-world programming problems.
          </p>
       
          <h3> Community Support:</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learning is more fun
            when it's a collaborative experience. Join our vibrant community of
            learners, where you can ask questions, share insights, and connect
            with like-minded individuals passionate about programming.
          </p>
    
          <h3>Absolutely Free:</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Education should be
            accessible to everyone. That's why all our resources are completely
            free! No hidden fees, no subscriptions—just a wealth of knowledge
            waiting for you to explore.
          </p>
      
          <h3>Get Started Today!</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ready to take the
            first step? Head over to [Your Website URL] and begin your
            programming journey with confidence. Whether you're a complete
            beginner or looking to expand your skills, [Your Website Name] is
            the perfect companion on your path to becoming a programming pro.
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Happy coding! 👩‍💻👨‍💻
          </p>
          </div>
          <div className="sider">
          <Card style={{ width: '18rem', border:'2px solid black' }}>
      <Card.Img variant="top" src="static/images/jdbccard.jpg" height="180"/>
      <Card.Body>
        <Card.Title>JDBC</Card.Title>
        <Card.Text>
          JDBC class in now started from february 22, 2024 in Ducate by Mahesh Sir. For daily class Note please click on below link
        </Card.Text>
        <Button variant="primary"><Link to='java/jdbc' style={{color:'white', textDecoration:"none"}}>Go to JDBC Page</Link></Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', border:'2px solid black' }}>
      <Card.Img variant="top" src="static/images/React.jpg" height="180"/>
      <Card.Body>
        <Card.Title>React</Card.Title>
        <Card.Text>
           For react note from scratch, visite react page by clicking below.
        </Card.Text>
        <Button variant="primary"><Link to='react' style={{color:'white', textDecoration:"none"}}>Go to React Page</Link></Button>
      </Card.Body>
    </Card>

            </div>
          </div>
         
  );
}
