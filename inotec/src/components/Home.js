import React, { useEffect } from 'react'
import AddNote from './AddNote';
import Notes from './Notes';
import { useHistory } from 'react-router-dom';
export default function Home(props) {
    const history=useHistory()
    useEffect(() => {
        if(!localStorage.getItem("token")){
            history.push("/login")
        }
    })
    return (
        <div className="container my-3">
            <h1>Add a note</h1>
            <AddNote alert={props.alert}></AddNote>
            <Notes alert={props.alert}></Notes>
        </div>
    )
}
