import React from "react";

const TodoList = ({ children }) => {
  return (
    <section className="task-section">
      <ul>{children}</ul>
    </section>
  );
};

export { TodoList };
