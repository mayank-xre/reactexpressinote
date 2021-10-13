import notecontext from "./noteContext"
import { useState } from "react"
const NoteState=(props)=>{
      const [notes, setnotes] = useState([])
      const addnote=async (title,desc,topic)=>{
        const note={
            "title":title,
            "desc":desc,
            "topic":topic
        }
        await fetch("http://localhost:5000/api/notes/createn/",{
            method:"POST",
            headers:new Headers({
                'auth-token':localStorage.getItem("token"),
                'Content-Type': 'application/json'
              }),
              body: JSON.stringify(note)
            })
        getnotes()
      }
      const getnotes =async ()=>{
        const res=await fetch("http://localhost:5000/api/notes/fetchanotes/",{
            method:"GET",
            headers:new Headers({
                'auth-token':localStorage.getItem("token"),
                'Content-Type': 'application/json'
              }
              )
            })
        const json=await res.json()
        await setnotes(json)
      }
      const delNote=async (id)=>{
        const res=await fetch(`http://localhost:5000/api/notes/deleten/${id}`,{
            method:"DELETE",
            headers:new Headers({
                'auth-token':localStorage.getItem("token"),
                'Content-Type': 'application/json'
              }
              )
            })
        getnotes()
      }
      const editnote=async (id,title,desc,topic)=>{
        const note={
          "id":id,
          "title":title,
          "desc":desc,
          "topic":topic
        }
        await fetch("http://localhost:5000/api/notes/updaten/",{
            method:"POST",
            headers:new Headers({
                'auth-token':localStorage.getItem("token"),
                'Content-Type': 'application/json'
              }),
              body: JSON.stringify(note)
        })
        getnotes()
      }
    return(
        <notecontext.Provider value={{notes,addnote,delNote,getnotes,editnote}}>
            {props.children}
        </notecontext.Provider>
    )
}
export default NoteState