import React from 'react'
import AddNote from './AddNote';
import Notes from './Notes';
export default function Home() {
    return (
        <div className="container my-3">
            <h1>Add a note</h1>
            <AddNote></AddNote>
            <Notes></Notes>
        </div>
    )
}
