import React, { useContext } from "react";
import "./App.css";
import { TareasContexto } from "../tareas/TareasContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { TodoHeader } from "../components/TodoHeader";
import "../components/styles/components.css";
import { CreateModal } from "../modales/CreateModal";
import {CreateTaskForm} from "../components/CreateTaskForm"
import { LoadingSquare } from "../components/LoadingSquare";

function AppUI() {
  const {
    totalTareas,
    tareasCompletadas,
    searchValue,
    setSearchValue,
    tareasFiltradas,
    tareaCompletada,
    borrarTarea,
    loading,
    error,
    modalStatus,
    setModalStatus,
  } = useContext(TareasContexto);

  return (
    <main className="app-container">
      <TodoHeader>
        <TodoCounter
          totalTareas={totalTareas}
          tareasCompletadas={tareasCompletadas}
        />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <LoadingSquare />}
        {!loading && !totalTareas && <p>Crea tu primer tarea</p>}
        
        {tareasFiltradas.map((tarea, index) => (
          <TodoItem
            texto={tarea.texto}
            key={index}
            completed={tarea.completed}
            onComplete={() => tareaCompletada(tarea.texto)}
            onDelete={() => borrarTarea(tarea.texto)}
          />
        ))}
      </TodoList>

      {!!modalStatus && (
        <CreateModal>
        <CreateTaskForm modalStatus={modalStatus} setModalStatus={setModalStatus} />
        </CreateModal>
      )}

      <CreateTodoButton
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
      />
    </main>
  );
}

export default AppUI;
