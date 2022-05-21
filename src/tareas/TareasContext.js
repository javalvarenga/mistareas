import React, { useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

const TareasContexto = React.createContext();

function ProviderTareas(props) {
  const {
    item: tareas,
    guardarItem: guardarTarea,
    loading,
    error,
  } = useLocalStorage("TAREAS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [modalStatus, setModalStatus] = useState(false);

  const tareasCompletadas = tareas.filter((tarea) => !!tarea.completed).length;
  const totalTareas = tareas.length;
  let tareasFiltradas = [];

  if (!searchValue.length >= 1) {
    tareasFiltradas = tareas;
  } else {
    tareasFiltradas = tareas.filter((tarea) => {
      const textoTarea = tarea.texto.toLowerCase();
      const textoFiltro = searchValue.toLowerCase();
      return textoTarea.includes(textoFiltro);
    });
  }
  const agregarTarea = (texto) => {
    const nuevasTareas = [...tareas]
    nuevasTareas.push({
        completed: false,
        texto:texto
    })
    guardarTarea(nuevasTareas)
  };
  const tareaCompletada = (texto) => {
    const indexTarea = tareas.findIndex((tarea) => tarea.texto === texto);
    const nuevasTareas = [...tareas];
    nuevasTareas[indexTarea].completed = !nuevasTareas[indexTarea].completed;
    guardarTarea(nuevasTareas);
  };

  const borrarTarea = (texto) => {
    const indexTarea = tareas.findIndex((tarea) => tarea.texto === texto);
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(indexTarea, 1);
    guardarTarea(nuevasTareas);
  };


  return (
    <TareasContexto.Provider
      value={{
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
        agregarTarea
      }}
    >
      {props.children}
    </TareasContexto.Provider>
  );
}

export { ProviderTareas, TareasContexto };
