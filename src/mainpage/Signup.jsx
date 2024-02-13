import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PrivateComponent from "./PrivateComponent";
export default function Signup(){
    const [name,setName]=useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("")

    const collectData=async()=>{
        console.log(name,email,password);
        let result=await fetch('http://localhost:5000/signup',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email, password }),  
        })
        result=await result.json();
        console.log(result)
 localStorage.setItem("student",JSON.stringify(result));
        }
    return(
        <div className="signIn">
      <h2>Create Account</h2>
      
      <form action="" className="form-container g-3 needs-validation ">
      <label htmlFor="name" className="me-3">
         name
        </label>
        <input id="name" type="name" placeholder="Enter your name" class="form-control" value={name} onChange={(e)=>setName(e.target.value)}  required/>
        <label htmlFor="email" className="me-3">
          Email
        </label>
        <input id="email" type="email" placeholder="abc@gmail.com" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
        <label htmlFor="password" className="me-3">
          Password
        </label>
        <input id="password" type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
        <button type="submit" class="btn btn-primary mt-3" onClick={collectData}>
          sign up
        </button>
      </form>
      <p>Already have account &nbsp; <Link to="/signin">sign in</Link></p>

    </div>
    )
}