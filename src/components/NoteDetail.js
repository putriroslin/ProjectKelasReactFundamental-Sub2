import React from 'react';
import PropType from 'prop-types';
import { showFormattedDate } from "../utils/index";

function NoteDetail({title, body, createdAt}) {
    return (
        <div className="note-item">
            <h3 className="note-item__title">
                {title}
            </h3>
            <h3 className="note-item__date">
                {showFormattedDate(createdAt)}
            </h3>
            <h3 className="note-item__body">
                {body}
            </h3>
        </div>
    );
}
NoteDetail.propType = {
    title: PropType.string.isRequired,
    body: PropType.string.isRequired,
    createdAt: PropType.string.isRequired,
}

export default NoteDetail;