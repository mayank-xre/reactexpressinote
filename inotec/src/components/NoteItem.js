import React from "react";
import { useContext,useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
import axios from "axios";
export default function NoteItem(props) {
  const { note,updaten } = props;
  const context = useContext(noteContext)
  const delNote=context.delNote;
  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <div class="card-body">
          <div className="d-flex align-items-center">
          <h5 class="card-title">{note.title}</h5>
          <i className="far fa-trash-alt mx-2" onClick={()=>{delNote(note._id)}}></i>
          <i className="fas fa-edit" onClick={updaten}></i>
          </div>
          <p class="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
