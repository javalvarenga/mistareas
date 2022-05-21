import React from "react";

const CreateTodoButton = ({ modalStatus, setModalStatus }) => {
  return <button className="createTodo" onClick={()=>setModalStatus(!modalStatus)}>
    {modalStatus ? 'x' : '+'}
    </button>;
};

export { CreateTodoButton };
