import React from "react";
import PropType from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, loading }) {
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <section>
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              {...note}
            />
          ))
        )}
      </div>
    </section>
  );
}
NoteList.propTypes = {
  notes: PropType.arrayOf(PropType.object).isRequired,
  onDelete: PropType.func.isRequired,
  loading: PropType.bool.isRequired,
};

export default NoteList;
