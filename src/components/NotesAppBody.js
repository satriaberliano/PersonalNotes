import React from "react";
import NotesList from "./NotesList";
import NotesInput from "./NotesInput";

function NotesAppBody({ notes, addNotes, onDelete, onArchive }){
  const activeNotes = notes.filter((note) => note.archived === false);
  const archivedNotes = notes.filter((note) => note.archived === true);

  return(
    <div className="notes-app__body">
      <NotesInput addNotes={addNotes}/>
      <h2>Catatan Aktif</h2>
      <NotesList notes={activeNotes} onDelete={onDelete} onArchive={onArchive}/>
      <h2>Arsip</h2>
      <NotesList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive}/>
    </div>
  )
}

export default NotesAppBody;