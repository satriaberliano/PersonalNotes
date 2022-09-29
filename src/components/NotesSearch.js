import React from "react";

function NotesSearch({ wordInput, onSearch }){
  return(
    <div className="notes-search">
      <input type='text' placeholder='Cari Catatan...' value={wordInput} onChange={onSearch}></input>
    </div>
  )
}


export default NotesSearch;