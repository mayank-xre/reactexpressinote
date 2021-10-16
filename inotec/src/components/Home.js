import React, { useEffect } from 'react'
import AddNote from './AddNote';
import Notes from './Notes';
import { useHistory,Redirect } from 'react-router-dom';
import { useContext } from 'react';
import notecontext from '../context/notes/noteContext'
export default function Home(props) {
    const history=useHistory()
    const context = useContext(notecontext)
    useEffect(() => {
        if(!document.cookie){
            history.push("login")
        }
    })
    return (
        <div className={`container my-3 text-${context.mode==="light"?"dark":"light"}`}>
            <h1>Add a note</h1>
            <AddNote alert={props.alert}></AddNote>
            <Notes alert={props.alert}></Notes>
        </div>
    )
}
