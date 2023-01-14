import React from "react";
import { addNote } from "../utils/api";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

function AddPage() {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  async function onAddNoteHandler(notes) {
    await addNote(notes);
    navigate("/");
  }

  return (
    <section>
      <h2>{locale === "id" ? "Tambah Catatan Baru" : "Add New Note"}</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
