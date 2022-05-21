import React from "react";


const TodoCounter = ({ totalTareas, tareasCompletadas }) => {



  return (
    <h2>
      {tareasCompletadas} de {totalTareas}
    </h2>
  );
};

export { TodoCounter };
