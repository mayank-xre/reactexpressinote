import React from "react";
import { useHistory } from "react-router-dom";

export default function Login(props) {
    const history=useHistory()
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
              body: JSON.stringify(logd)
        })
        const json=await res.json()
        if(json.authtoken){
            localStorage.setItem("token",json.authtoken)
            history.push("/")
        }
        else{
            props.alert("Invalid Credentials","danger")
        }
    }
  return (
    <div class="container my-3">
      <h2>Login to continue to Inote</h2>
      <form onSubmit={loginu}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
