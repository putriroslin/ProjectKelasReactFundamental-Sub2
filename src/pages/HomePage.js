import React from "react";
//import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import NoteSearch from "../components/NoteSearch";
import { deleteNote, getNotes } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    const { data } = await getNotes();
    setNotes(data);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <h2>{locale === "id" ? "Daftar Catatan" : "Notes List"}</h2>
      <NoteSearch keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList
        loading={loading}
        notes={filteredNotes}
        onDelete={onDeleteHandler}
      />
    </section>
  );
}
export default HomePage;
