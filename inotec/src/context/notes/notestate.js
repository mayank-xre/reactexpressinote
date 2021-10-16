import notecontext from "./noteContext"
import { useState,useEffect } from "react"
const NoteState=(props)=>{
      const [notes, setnotes] = useState([])
      const [mode, setmode] = useState(localStorage.getItem("theme"))
      const togglemode=()=>{
        if(mode==="light"){
          setmode("dark")
          document.body.style.backgroundColor='black'
          localStorage.setItem("theme","dark")
        }
        else{
          setmode("light")
          document.body.style.backgroundColor="white"
          localStorage.setItem("theme","light")
        }
      }
      function cookieExists(name) {
        var cks = document.cookie.split(';');
        for(let i = 0; i < cks.length; i++)
          if (cks[i].split('=')[0].trim() == name) return true;
      }      
      const addnote=async (title,desc,topic)=>{
        const note={
            "title":title,
            "desc":desc,
            "topic":topic
        }
        await fetch("http://localhost:5000/api/notes/createn/",{
            method:"POST",
            credentials:"include",
            headers:new Headers({
                'Content-Type': 'application/json'
              }),
              body: JSON.stringify(note)
            })
        getnotes()
      }
      const getnotes =async ()=>{
        const res=await fetch("http://localhost:5000/api/notes/fetchanotes/",{
            method:"GET",
            credentials:"include",
            headers:new Headers({
                'Content-Type': 'application/json'
              }
              ),
            })
        const json=await res.json()
        await setnotes(json)
      }
      const delNote=async (id)=>{
        const res=await fetch(`http://localhost:5000/api/notes/deleten/${id}`,{
            method:"DELETE",
            credentials:"include",
            headers:new Headers({
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
            credentials:"include",
            headers:new Headers({
                'Content-Type': 'application/json'
              }),
              body: JSON.stringify(note)
        })
        getnotes()
      }
      useEffect(async()=>{
        await getnotes()
      },[])
    return(
        <notecontext.Provider value={{notes,addnote,delNote,getnotes,editnote,mode,togglemode,cookieExists}}>
            {props.children}
        </notecontext.Provider>
    )
}
export default NoteState