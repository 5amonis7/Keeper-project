import React from "react";

function Note(props) {

  function handleNote(){
    props.click(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleNote} >Delete</button>
    </div>
  );
}

export default Note;
