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
import { useEffect, useState } from "react";

/*function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = async(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setAlert(null)
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

export default App;*/
import {Component } from 'react'

export default class App extends Component {
  showAlert = async(message, type)=>{
    this.setState({alert:{
      msg: message,
      type: type
    }})
    setTimeout(() => {
      this.setState(null)
    }, 3000);
}
constructor(props){
  super(props)
  this.state={alert:null}
  if(!localStorage.getItem("theme")){
    localStorage.setItem("theme","light")
    document.body.style.backgroundColor="white"
  }
  else{
    if(localStorage.getItem("theme")=="dark"){
      document.body.style.backgroundColor='black'
    }
    else{
      document.body.style.backgroundColor="white"
    }
}
}
  render() {
    return (
      <>
    <NoteState>
      <Router>
        <Navbar></Navbar>
        <Alert alert={this.state.alert}></Alert>
        <Switch>
          <Route exact path="/">
            <Home alert={this.showAlert}/>
          </Route>
          <Route exact path="/login">
            <Login alert={this.showAlert}></Login>
          </Route>
          <Route exact path="/signup">
            <Signup alert={this.showAlert}></Signup>
          </Route>
        </Switch>
      </Router>
      </NoteState>
    </>
    )
  }
}
