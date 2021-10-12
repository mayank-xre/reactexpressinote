//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoteState from "./context/notes/notestate";

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
        </Switch>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
