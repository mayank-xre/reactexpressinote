import React from "react";
import { useContext,useEffect,useRef } from 'react';
import noteContext from '../context/notes/noteContext';
import axios from "axios";
export default function NoteItem(props) {
  const { note } = props;
  const context = useContext(noteContext)
  const delNote=context.delNote;
  const editnote=context.editnote
  const refm = useRef();
  const refb=useRef()
  const refc=useRef()
  const showmodal = () => {
    document.getElementById("etitle").value=note.title;
    document.getElementById("edesc").value=note.description;
    document.getElementById("etopic").value=note.topic;
    refm.current.click()
  };
  const editNoteform=(e)=> {
    e.preventDefault();
    editnote(note._id,document.getElementById("etitle").value,document.getElementById("edesc").value,document.getElementById("etopic").value)
    refc.current.click()
    props.alert("Successfully updated","success")
  }
  const subbut=(e)=>{
    refb.current.click()
  }
  return (
    <>
    <div className="col-md-3 my-2">
      <div className="card">
        <div class="card-body">
          <div className="d-flex align-items-center">
          <h5 class="card-title">{note.title}</h5>
          <i className="far fa-trash-alt mx-2" onClick={()=>{delNote(note._id);props.alert("Deleted Successfully","success")}}></i>
          <i className="fas fa-edit" onClick={showmodal}></i>
          </div>
          <p class="card-text">{note.description}</p>
        </div>
      </div>
    </div>
    <button
        ref={refm}
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        hidden
      >
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            <form className="my-3" onSubmit={editNoteform}>
        <div className="mb-3">
          <label className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="edesc"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Topic
          </label>
          <input
            type="text"
            className="form-control"
            id="etopic"
          />
        </div>
        <button ref={refb} type="submit" className="btn btn-dark" hidden></button>
      </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                ref={refc}
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary" onClick={subbut}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
