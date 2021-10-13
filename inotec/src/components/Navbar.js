import {React,useEffect,Fragment} from "react";
import { Link,useLocation,useHistory } from "react-router-dom";

export default function Navbar() {
    let location=useLocation()
    useEffect(() => {},[location])
    const history=useHistory()
    const logout=()=>{
      localStorage.removeItem("token")
      history.push("/login")
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <li className="nav-item">
               <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
            </li>
            {!localStorage.getItem("token") ?<>
            <li className="nav-item">
               <Link className={`nav-link ${location.pathname==="/login"?"active":""}`} to="/login">Login</Link>
            </li>
            <li className="nav-item">
               <Link className={`nav-link ${location.pathname==="/signup"?"active":""}`} to="/signup">Signup</Link>
            </li></>
          :<li><button className="btn btn-primary" type="button" onClick={logout}>Logout</button></li>}
          </ul>
        </div>
        <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
      </div>
    </nav>
  );
}
