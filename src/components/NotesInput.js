import React from "react";

class NotesInput extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      maxsChar: 50
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event){
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.maxsChar),
      }
    });
  }

  onBodyChangeEventHandler(event){
    this.setState(() => {
      return {
        body: event.target.value
      }
    })
  }

  onSubmitEventHandler(event){
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render(){
    return (
    <div className="notes-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={this.onSubmitEventHandler}>
        <p className="notes-input__title__char-limit">Sisa Karakter: {this.state.maxsChar - this.state.title.length}</p>
        <input className="notes-input__title" type="text" placeholder="Beri judul..." required value={this.state.title} onChange={this.onTitleChangeEventHandler} ></input>
        <textarea className="notes-input__body" type="text" placeholder="Tuliskan catatanmu di sini..." required value={this.state.body} onChange={this.onBodyChangeEventHandler} ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
    )
  }
}
export default NotesInput;