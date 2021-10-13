import React from "react";
import { useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

export default function Notes(props) {
  const context = useContext(noteContext);
  const { notes, getnotes,addnote } = context;
  useEffect(() => {
    getnotes();
  }, []);
  return (
    <div className="row my-3">
      <h1>Your Notes</h1>
      {notes.map((note) => {
        return (
          <NoteItem alert={props.alert} note={note} key={note._id}></NoteItem>
        );
      })}
    </div>
  );
}
