import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
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
        let ind=keyArray.indexOf('student');
        console.log(ind)
      }
      loadPage(); 
 },[]);
 const getNote=(item)=>{
let content= localStorage.getItem(item);
content=JSON.parse(content).note;
setNote(content);
 }
 const deleteNote=(item)=>{
  localStorage.removeItem(item)
  alert(`Note ${item} successfully removed. Please reload page for see updated content`)
  console.log(item)
 }
    return(
        <div className="mt130 container-fluid">
            <h1>Hello  {studentName}</h1>
            <h4>Your Name : <span className="ptext">{studentName}</span> </h4>
            <h4>Your Email: <span className="ptext">{email}</span></h4>
            <div className="noteContainer">
            <ul>
              {keyArray.map((item, index)=>(
               
                <li className="noteList">
                  <Link key={index} onClick={()=>getNote(item)}>{item}</Link><svg onClick={()=>deleteNote(item)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
              </svg>
              </li>
              ))}
            </ul>
            <p className="decription">{note}</p>
            </div>
           
        </div>
    )
}