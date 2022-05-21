import React from "react";
import { FaCheckCircle, FaRegTrashAlt } from "react-icons/fa";

const TodoItem = ({ texto, completed, onComplete, onDelete }) => {
  const status = completed ? "completed" : "incompleted";

  return (
    <li>
      <FaCheckCircle className={`${status}-icon`} onClick={onComplete} />
      <p>{texto}</p>
      <FaRegTrashAlt className="trash-icon" onClick={onDelete} />
    </li>
  );
};

export {TodoItem};
