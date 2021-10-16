import {React,useEffect,useContext} from "react";
import notecontext from "../context/notes/noteContext"
import { Link,useLocation,useHistory } from "react-router-dom";

export default function Navbar() {
    let location=useLocation()
    const context=useContext(notecontext)
    useEffect(() => {},[location])
    const history=useHistory()
    const logout=async(e)=>{
      e.preventDefault();
      document.cookie = "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      history.push("/login")
    }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${context.mode} bg-${context.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Inote
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            {!context.cookieExists("auth-token")?<>
            <li className="nav-item">
               <Link className={`nav-link ${location.pathname==="/login"?"active":""}`} to="/login">Login</Link>
            </li>
            <li className="nav-item">
               <Link className={`nav-link ${location.pathname==="/signup"?"active":""}`} to="/signup">Signup</Link>
            </li></>
          :<li className="nav-item">
            <a className="nav-link" onClick={logout}>Logout</a></li>}
          </ul>
        </div>
        <div class={`form-check form-switch text-${context.mode==="light"?"dark":"light"}`}>
  <input class="form-check-input" type="checkbox" role="switch" onClick={context.togglemode} id="flexSwitchCheckDefault" defaultChecked={localStorage.getItem("theme")=="light"?false:true}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Toggle Dark Mode</label>
</div>
      </div>
    </nav>
  );
}
