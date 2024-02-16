import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
export default function Signup() {
  const navigate= useNavigate();
  const [nam, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pic,setPic]=useState('')
       
  const collectData = async () => {
    localStorage.setItem("student",JSON.stringify({"name":nam, "email":email,"password":password,"pic":pic})) ;
    console.log(`collect data called ${email}`)
    navigate("/");
    await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({nam,email,password,pic }),
    });
  };
  return (
    <div className="signIn">
      <h2>Create Account</h2>

      <form action="" className="form-container g-3 needs-validation " enctype="multipart/form-data">
        <label htmlFor="nam" className="me-3">
          nam
        </label>
        <input
          id="nam"
          type="nam"
          placeholder="Enter your name"
          className="form-control"
          value={nam}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email" className="me-3">
          Email
        </label>
        <input
          id="emai"
          type="email"
          placeholder="abc@gmail.com"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password" className="me-3">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
         <label  className="me-3">
          Choose profile Pic
        </label>
        <input type="file" onClick={(e)=>setPic(e.target.value)} />
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={collectData}
        >
          sign up
        </button>
      </form>
      <p>
        Already have account &nbsp; <Link to="/signin">sign in</Link>
      </p>
    </div>
  );
}
