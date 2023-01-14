import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from "../utils/index";
import DeleteButton from '../components/ActionDeleteButton';

function NoteItem({title, body, id, createdAt, onDelete}) {
    return (
        <div className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <h3 className="note-item__date">
                {showFormattedDate(createdAt)}
            </h3>
            <h3 className="note-item__body">
                {body}
            </h3>
            <div className='note-item__action'>
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}
NoteItem.propType = {
    title: PropType.string.isRequired,
    body: PropType.string.isRequired,
    id: PropType.string.isRequired,
    createdAt: PropType.string.isRequired,
    onDelete: PropType.func.isRequired,
}

export default NoteItem;