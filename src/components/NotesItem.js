import React from "react";
import NotesItemContent from "./NotesItemContent";
import NotesItemButton from "./NotesItemButton";

function NotesItem({ id, title, createdAt, body, archived, onDelete, onArchive }){
  return(
    <div className="notes-item">
      <NotesItemContent title={title} body={body} createdAt={createdAt} />
      <NotesItemButton id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
    </div>
  )
}

export default NotesItem;