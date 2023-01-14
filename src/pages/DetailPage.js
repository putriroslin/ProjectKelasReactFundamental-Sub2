import React, { useContext, useEffect, useState } from "react";
// PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getDetailNote } from "../utils/api";
import PageNotFound from "./PageNotFound";
import LocaleContext from "../contexts/LocaleContext";

function DetailPage() {
  const [notes, setNotes] = useState([]);
  const { locale } = useContext(LocaleContext);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const { data } = await getDetailNote(id);
      setNotes(data);
    };
    getData();
  }, [id]);

  return notes === undefined ? (
    <PageNotFound />
  ) : (
    <section>
      <h2>{locale === "id" ? "Detail Catatan" : "Note Details"}</h2>
      <NoteDetail
        id={notes.id}
        title={notes.title}
        body={notes.body}
        createdAt={notes.createdAt}
      />
    </section>
  );
}

export default DetailPage;
