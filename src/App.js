import React , {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";

const App = ()=>{

    const [notes , setNotes] =useState([])

    const addNote = (note)=>{
        console.log(note);
        setNotes(prevNotes =>{
            return [...prevNotes , note]
        })
    }

    const s =(title)=>{
        setNotes(prevNotes =>{
           return prevNotes.filter( noteItem =>{
               return  (noteItem.title !== title)
            })
        })
    }

    return (<div>
        <Header />
        <CreateNote onSubmit={addNote}/>
        {notes.map((noteData,index)=>{
           return (
            <Note
            id={index}
            key={index}
            title={noteData.title}
            content={noteData.content}
            deleteNote={s} />
            )
               
        })}
        <Footer />
    </div>)
}

export default App