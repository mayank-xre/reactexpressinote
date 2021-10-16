import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        if (word==="danger"){
            word="error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div className="container my-2">
        <div>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
        </div>
        </div>
    )
}
