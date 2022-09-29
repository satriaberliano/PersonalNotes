import React from "react";
import { getInitialData } from "../utils";
import NotesAppBody from "./NotesAppBody";
import NotesAppHeader from "./NotesAppHeader";

class NotesApp extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      notes: getInitialData(),
      wordInput: '',
    }

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onSearchNotesEventHandler = this.onSearchNotesEventHandler.bind(this);
    this.onArchivedNotesHandler = this.onArchivedNotesHandler.bind(this);
  }

  onAddNotesHandler({ title, body }){
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date()
          }
        ]
      }
    })
    alert("Catatan Berhasil Ditambahkan")
  }

  onDeleteNotesHandler(id){
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onSearchNotesEventHandler(event){
    this.setState(() => {
      return {
        wordInput: event.target.value
      }
    })
  }

  onArchivedNotesHandler(id){
    const notes = this.state.notes.map((note) => note.id === id ? {...note, archived : !note.archived} : note)
    this.setState({ notes });
  }

  render(){
    const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.wordInput.toLowerCase()))

    return(
      <div className="notes-app">
        <NotesAppHeader 
          wordInput={this.state.wordInput}
          onSearch={this.onSearchNotesEventHandler} />

        <NotesAppBody 
          notes={notes} 
          addNotes={this.onAddNotesHandler} 
          onDelete={this.onDeleteNotesHandler} 
          onArchive={this.onArchivedNotesHandler}
          wordInput={this.state.wordInput}/>
      </div>
    )
  }
}

export default NotesApp;