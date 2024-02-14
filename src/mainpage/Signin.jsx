import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "/src/App.css";
import { useState } from "react";
import Useeffect from "../pages/react/reacttopics/Useeffect";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate= useNavigate();

 
  const setLogin=async()=>{
      console.log("email,password",email,password)
      let result=await fetch("http://localhost:5000/signin",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password})
      })
      result= await result.json();
      if(result.nam){
        localStorage.setItem("student",JSON.stringify(result)) ;
        navigate("/");
      }else{
        alert("Please enter correct detail")
      }
  }
  useEffect(()=>{
    const auth= localStorage.getItem('student');
    
    if(auth){
      navigate('/');
    }
  },[])
  return (
    <div className="signIn">
      <h2>Sign In</h2>
      <form action="" className="form-container needs-validation" noValidate>
        <label htmlFor="email" className="me-3">
          Email
        </label>
        <input id="email" type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}  required />
        <label htmlFor="password" className="me-3">
          Password
        </label>
        {/* <div class="valid-feedback">
      Looks good!
    </div> */}
        <input id="password" type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}  required />
        <button className="btn btn-primary mt-3" type="submit" onClick={setLogin}>
          sign in
        </button>
      </form>
      <p>Are you new user? Please sign up first- <Link to="/signup">sign up</Link></p>
    </div>
  );
}

