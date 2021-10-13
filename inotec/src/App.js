//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoteState from "./context/notes/notestate";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <NoteState>
      <Router>
        <Navbar></Navbar>
        <Alert alert={alert}></Alert>
        <Switch>
          <Route exact path="/">
            <Home alert={showAlert}/>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/login">
            <Login alert={showAlert}></Login>
          </Route>
          <Route exact path="/signup">
            <Signup alert={showAlert}></Signup>
          </Route>
        </Switch>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
