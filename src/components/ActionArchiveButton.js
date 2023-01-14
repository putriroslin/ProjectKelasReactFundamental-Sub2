import React from 'react';
import PropType from 'prop-types';
import { IoArchive } from 'react-icons/io';

function ArchiveButton({id, onArchive}) {
    return <button className="action" onClick={() => onArchive(id)}><IoArchive /></button>   
}
ArchiveButton.propTypes = {
    id: PropType.string.isRequired,
    onArchive: PropType.func.isRequired,
}

export default ArchiveButton;