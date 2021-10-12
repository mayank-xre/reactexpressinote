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
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjJkODJmNGE1NmE0YjlhZjBmNzc3NSIsImlhdCI6MTYzMzk0NDAzMn0.VN2JMv6Giw35eMabBY-YZJS7OXmSQP_bYAbBeEFw8Uw',
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
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjJkODJmNGE1NmE0YjlhZjBmNzc3NSIsImlhdCI6MTYzMzk0NDAzMn0.VN2JMv6Giw35eMabBY-YZJS7OXmSQP_bYAbBeEFw8Uw',
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
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjJkODJmNGE1NmE0YjlhZjBmNzc3NSIsImlhdCI6MTYzMzk0NDAzMn0.VN2JMv6Giw35eMabBY-YZJS7OXmSQP_bYAbBeEFw8Uw',
                'Content-Type': 'application/json'
              }
              )
            })
        getnotes()
      }
      const editnote=(id,title,desc,tag)=>{
          for (let i = 0; i < notes.length; i++) {
              const element = notes[i];
              if(element._id===id){
                  element.title=title;
                  element.description=desc;
                  element.topic=tag;
              }
          }
      }
    return(
        <notecontext.Provider value={{notes,addnote,delNote,getnotes}}>
            {props.children}
        </notecontext.Provider>
    )
}
export default NoteState