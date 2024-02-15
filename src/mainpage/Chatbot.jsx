// // 
// import { useState } from "react";
// export default function Chatbot(){
//   const [question, setQuestion]=useState('Default');
//   const[ans,setAns]=useState("Waiting for ans")
//   const askQustion=async()=>{
//     let answer= await fetch('http://localhost:5000/chatbot',{
//       method:"POST",
//       headers:{"Content-Type":'application/json'},
//       body:JSON.stringify({question})
//     }) 
//    answer= await answer.json();
//    let nsr=JSON.stringify(answer.question)
//    setAns(nsr)
//    alert(ans,"1")
//    alert(nsr,"2")
// }
// console.log(ans)
// alert(ans,"3")
//   return(
//     <div className="container-fluid body-home">
//     <form >
//       <label htmlFor="email" className="me-3">Query</label>
//         <input id="email" type="text" className="form-control" value={question} onChange={(e)=>setQuestion(e.target.value)}  required />
//         <button className="btn btn-primary mt-3" type="submit" onClick={askQustion}>search </button>
//     </form>
//     <p>{ans}</p>
//     </div>
//   )
// }
