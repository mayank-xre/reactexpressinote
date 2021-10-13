import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Signup(props) {
    const history=useHistory()
    const signupu=async(e)=>{
        e.preventDefault();
        const signupd={
            email:document.getElementById("email").value,
            name:document.getElementById("name").value,
            password:document.getElementById("password").value,
            repassword:document.getElementById("repassword").value
        }
        if(document.getElementById("password").value===document.getElementById("repassword").value){
            const res=await fetch("http://localhost:5000/api/auth/createu/",{
            method:"POST",
            headers:new Headers({
                'Content-Type': 'application/json'
              }),
              body: JSON.stringify(signupd)
            })
            const json=await res.json()
            if(!json.error){
                history.push("/login")
            }
            else{
                props.alert("A User With this name already exists","danger")
            }
        }
        else{
            props.alert("Passwords dont match","danger")
        } 
    }
    return (
        <div class="container my-3">
          <h2>Signup to use Inote</h2>
      <form onSubmit={signupu}>
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
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="etext"
            class="form-control"
            id="name"
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
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Re-enter Password
          </label>
          <input
            type="password"
            class="form-control"
            id="repassword"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
    )
}
