import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import notecontext from '../context/notes/noteContext'

export default function Signup(props) {
    const history=useHistory()
    const context = useContext(notecontext)
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
        <div className={`container my-3 text-${context.mode==="light"?"dark":"light"}`}>
          <h2>Signup to use Inote</h2>
      <form onSubmit={signupu}>
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
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="etext"
            className="form-control"
            id="name"
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Re-enter Password
          </label>
          <input
            type="password"
            className="form-control"
            id="repassword"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
    )
}
