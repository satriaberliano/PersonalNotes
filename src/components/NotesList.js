import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, wordInput, onDelete, onArchive}){

  if(notes.length > 0){
    return(
      <div className="notes-list">
        { 
          notes.map((note) => (
            <NotesItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note}/>
          ))
        }
      </div>
    )
    
  }else{
    return <p className="notes-list__empty-message">Tidak Ada Catatan</p>
  }



}

export default NotesList;