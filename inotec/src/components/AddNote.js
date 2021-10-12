import React from "react";
import { useContext,useState } from 'react';
import noteContext from '../context/notes/noteContext';

export default function AddNote() {
    const context = useContext(noteContext)
    const addnote=context.addnote;
    const addNoteform=(e)=> {
        e.preventDefault();
        addnote(document.getElementById("title").value,document.getElementById("desc").value,document.getElementById("topic").value)
      }
  return (
    <div>
      <form className="my-3" onSubmit={addNoteform}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Topic
          </label>
          <input
            type="text"
            className="form-control"
            id="topic"
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Add
        </button>
      </form>
    </div>
  );
}
