import React from "react";
import AppUI from "./AppUI";
import { ProviderTareas } from "../tareas/TareasContext";
function App() {
  return (
    <ProviderTareas>
      <AppUI />
    </ProviderTareas>
  );
}

export default App;
