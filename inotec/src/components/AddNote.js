import React from "react";
import { useContext, useState,useReducer } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

export default function AddNote(props) {
  const context = useContext(noteContext);
  const addnote = context.addnote;
  const [ignored, forceUpdate] = useState(1);
  const history=useHistory()
  const addNoteform =(e) => {
    e.preventDefault();
    addnote(
      document.getElementById("title").value,
      document.getElementById("desc").value,
      document.getElementById("topic").value
    );
      props.alert("Added Successfully","success")
      document.getElementById("title").value=""
      document.getElementById("desc").value=""
      document.getElementById("topic").value=""
      history.push("/")
      context.getnotes()
  };
  return (
    <div>
      <form className={`my-3 needs-validation text-${context.mode==="light"?"dark":"light"}`} onSubmit={addNoteform}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            required
            minLength={5}
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Atleast Five characters Needed</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea className="form-control" id="desc" rows="3" required
            minLength={5}></textarea>
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Atleast Five characters Needed</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Topic
          </label>
          <input
            type="text"
            className="form-control"
            id="topic"
            required
            minLength={3}
            maxLength={10}
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Atleast Five characters Needed</div>
        </div>
        <button type="submit" className="btn btn-dark">
          Add
        </button>
      </form>
    </div>
  );
}