import React from "react";

const Note = (props)=>{

const handleDelete = ()=>{
    props.deleteNote(props.title)

}

    return (
    <div className="note">
       <h1 >{props.title}</h1>
       <p >{props.content}</p>
       <button onClick={handleDelete}>x</button>
    </div>)
}

export default Note