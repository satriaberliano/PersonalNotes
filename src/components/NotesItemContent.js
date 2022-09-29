import React from "react";
import { showFormattedDate } from '../utils/index'

function NotesItemContent({ title, createdAt, body }){
  return(
    <div className="notes-item__content">
      <h3 className="notes-item__title">{title}</h3>
      <p className="notes-item__date">{showFormattedDate(createdAt)}</p>
      <p className="notes-item__body">{body}</p>
    </div>
  )
}

export default NotesItemContent