import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import notecontext from "../context/notes/noteContext";

export default function Login(props) {
    const history=useHistory()
    const context=useContext(notecontext)
    const loginu=async(e)=>{
        e.preventDefault();
        const logd={
            email:document.getElementById("email").value,
            password:document.getElementById("password").value
        }
        const res=await fetch("http://localhost:5000/api/auth/login/",{
            method:"POST",
            headers:new Headers({
                'Content-Type': 'application/json'
              }),
              credentials:"include",
              body: JSON.stringify(logd)
        })
        const json=await res.json()
        if(json.status){
          history.push("/")
        }
        else{
          props.alert("Invalid Credentials","danger")
        }
    }
  return (
    <div className={`container my-3 text-${context.mode==="light"?"dark":"light"}`}>
      <h2>Login to continue to Inote</h2>
      <form onSubmit={loginu}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
