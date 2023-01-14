import React from "react";
import PropType from "prop-types";
import { AiTwotoneDelete } from "react-icons/ai";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="action" onClick={() => onDelete(id)}>
      <AiTwotoneDelete />
    </button>
  );
}
DeleteButton.propTypes = {
  id: PropType.string.isRequired,
  onDelete: PropType.func.isRequired,
};

export default DeleteButton;
