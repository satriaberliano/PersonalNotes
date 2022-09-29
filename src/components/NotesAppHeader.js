import React from "react";
import NotesSearch from "./NotesSearch";

function NotesAppHeader({ wordInput, onSearch }){
  return (
    <div className='notes-app__header'>
      <h1>Personal Notes</h1>
      <NotesSearch wordInput={wordInput} onSearch={onSearch} />
    </div>
  )
}

export default NotesAppHeader;