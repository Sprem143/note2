import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
export default function Profile(){
  const[studentName,setName]=useState("User")
  const[email,setEmail]=useState("");
  const [keyArray, setKeyArray]=useState([]);
  const [note,setNote]=useState("Click on link to see your note")
  
 useEffect(()=>{
    const loadPage=()=>{
        let stdName=localStorage.getItem('student');
        stdName= JSON.parse(stdName);
        setName(stdName.name);
        setEmail(stdName.email)
        const keys = Object.keys(localStorage);
        setKeyArray(keys);
      }
      loadPage(); 
 },[]);
 const getNote=(item)=>{
let content= localStorage.getItem(item);
content=JSON.parse(content).note;
setNote(content);
 }

    return(
        <div className="mt130 container-fluid">
            <h1>Hello {studentName}</h1>
            <h4>Your Name : {studentName}</h4>
            <h4>Your Email: {email}</h4>
            <ul>
              {keyArray.map((item, index)=>(
               
                <li><Link key={index} onClick={()=>getNote(item)}>{item}</Link></li>
              ))}
            </ul>
            <p className="decription">{note}</p>
            
        </div>
    )
}