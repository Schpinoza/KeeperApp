import React , {useState} from 'react'

export default function CreateNote(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value
            }
        })
         
    }
    const handleClick = (e) =>{
        props.onSubmit(note)
        setNote({title:"", content:""})
        e.preventDefault()
        
    }
    const handlePress = (e) =>{
        if(e.key === "Enter"){
            props.onSubmit(note)
            setNote({title:"", content:""})
        }
        e.preventDefault()
 
        
    }



  return (
    <div>
        <h1>Wirte a note</h1>
        <form>
            <input name="title"  placeholder='Title' value={note.title} onChange={handleChange} autoComplete="off" type="text"/>
            <textarea name="content"  placeholder='Take a note...' value={note.content} onChange={handleChange} autoComplete="off" type="text"/>
            <button onClick={handleClick} > + </button>
        </form>
    </div>
  )
}
