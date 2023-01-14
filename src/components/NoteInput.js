import React from 'react';
import PropTypes from 'prop-types';
 
    class NoteInput extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          title: '',
          body: '',

        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      onTitleChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          }
        });
      }
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
      }
      render() {
        return (
          <form className='note-input' onSubmit={this.onSubmitEventHandler}>
            <p className='note-input__title__char-limit' id='char'>Sisa Karakter : {50 - this.state.title.length}</p>
            <input className='note-input__title' type="text" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            <input className='note-input__body' type="text" placeholder="Isi Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
            <button type="submit">Submit Catatan</button>
          </form>
        )
      }
    }

    NoteInput.propTypes = {
      addNote: PropTypes.func.isRequired,
    }
 
export default NoteInput;