import React, { useContext, useState } from "react";
import { TareasContexto } from "../tareas/TareasContext";

const CreateTaskForm = ({ modalStatus, setModalStatus }) => {
  const { agregarTarea } = useContext(TareasContexto);
  const [newTask, setNewTask] = useState("");

  const onWrite = (e) => {
    setNewTask(e.target.value);
  };
  const onCancel = () => {
    setNewTask("");
    setModalStatus(!modalStatus);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      agregarTarea(newTask);
      setModalStatus(!modalStatus);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h4>Nueva Tarea</h4>
      <textarea
        placeholder="programar 2 horas"
        value={newTask}
        onChange={onWrite}
      />
      <div className="create-buttons">
        <button type="button" className="cancel-btn" onClick={onCancel}>
          Cancelar
        </button>
        <button
          type="submit"
          className="ok-btn"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export { CreateTaskForm };
