import React from "react";
import { useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

export default function Notes(props) {
  const context = useContext(noteContext);
  const { notes, getnotes,addnote } = context;
  useEffect(()=>{
    getnotes()
},[])
  return (
    <div className="container">
    <div className={`grid text-${context.mode==="light"?"dark":"light"}`} data-masonry={{"percentPosition": true }}>
      <h1>Your Notes</h1>
      {notes.length===0 && <div class="alert alert-success" role="alert">No notes found</div>}
      {notes.map((note) => {
        return (
          <NoteItem alert={props.alert} note={note} key={note._id}></NoteItem>
        );
      })}
    </div>
    </div>
  );
}
