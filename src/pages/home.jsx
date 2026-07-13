import { useState, useEffect } from 'react'
import React from 'react'
import Card from '../components/card'

const Home = () => {

    const [notes, setNotes] = useState([])
    const [currentNote, setcurrentnote] = useState({ title: "", desc: "" })

    useEffect(() => {
        let localNotes = localStorage.getItem("notes")
        if (localNotes) {
            setNotes(JSON.parse(localNotes))
        }
    }, [])


    const handleSubmit = ((e) => {
        e.preventDefault()
        if (currentNote.title.trim() === "" || currentNote.desc.trim() === "") {
            alert("Please fill all fields.");
            return;
        }
        setNotes([...notes, currentNote])
        setcurrentnote({ title: "", desc: "" })
        localStorage.setItem("notes", JSON.stringify([...notes, currentNote]))
    })

    const deleteOne = (index) => {
        const updatedNotes = notes.filter((item, i) => i !== index)
        setNotes(updatedNotes)
        localStorage.setItem("notes", JSON.stringify(updatedNotes))
    }

    const handleChange = (e) => {
        setcurrentnote({ ...currentNote, [e.target.name]: e.target.value })
        // console.log(currentNote)
    }


    return (
        <>
            
            <main>
                <h1>CREATE YOUR NOTE</h1>

                <form action="" onSubmit={handleSubmit}>
                    <div className='titleSection'>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" value={currentNote.title} onChange={handleChange} />
                    </div>
                    <div className='descSection'>
                        <label htmlFor="desc">Description</label>
                        <textarea name="desc" id="desc" value={currentNote.desc} onChange={handleChange} />
                    </div>
                    <button className='submit'>Submit</button>
                </form>

            </main>

            <section className='noteSection'>

                <h2>YOUR NOTES</h2>
                <div className='container'>
                    {notes.map((note, index) => {
                        return <Card key={index} ondelete={() => deleteOne(index)} title={note.title} desc={note.desc} />
                    })}
                    {notes.length == 0 && <div>Add a note to continue</div>}
                </div>

            </section>

        </>
    )
}

export default Home