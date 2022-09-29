import React from "react";

function NotesItemButton({ id, archived, onDelete, onArchive}){
  return(
    <div className="notes-item__button">
      <button className="notes-item__delete-button" onClick={() => onDelete(id)}>Hapus</button>
      <button className="notes-item__archive-button" archived={archived} onClick={() => onArchive(id)}>{ archived ? "Pindahkan" : "Arsipkan"}</button>
    </div>
  )
}

export default NotesItemButton;