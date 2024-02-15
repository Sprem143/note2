// 
import React, { useEffect } from "react";
import { useState } from "react";
export default function Chatbot(){
  const [question, setQuestion]=useState('Default');
  const[ans,setAns]=useState("Waiting for ans")

  const askQustion=async()=>{
    let answer= await fetch('http://localhost:5000/chatbot',{
      method:"POST",
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify({question})
    }) 
   answer= await answer.json();
   alert(JSON.stringify(answer.question))
   let nsr=JSON.stringify(answer.question)
   console.log(answer);
   const forceUpdate = React.useCallback(() =>setAns(nsr), []);
  forceUpdate();
  }
  return(
    <div className="container-fluid body-home">
    <form >
      <label htmlFor="email" className="me-3">
         Query
        </label>
       
        <input id="email" type="text" className="form-control" value={question} onChange={(e)=>setQuestion(e.target.value)}  required />
        <button className="btn btn-primary mt-3" type="submit" onClick={askQustion}>
          Search
        </button>
    </form>
    <p>{ans}</p>
    </div>
  )
}
