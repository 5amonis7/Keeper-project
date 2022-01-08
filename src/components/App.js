import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea.jsx";


function App() {

const [ notes, setNotes ] = useState([]);

function newNote(note){
  setNotes((prevNotes) => {
    return [...prevNotes, note]
  })
}

function deleteNote(id){
  setNotes((prevNote) => {
    return prevNote.filter((item, index) => {
      return index !== id;
    })
  })
}

  return (
    <div>
      <Header />
        <CreateArea addNote={newNote} />
        {notes.map((item, index) => <Note click={deleteNote} key={index} id={index} title={item.title} content={item.content} />)}
      <Footer />
    </div>
  );
}

export default App;
