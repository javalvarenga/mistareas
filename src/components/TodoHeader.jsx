import React from "react";

const TodoHeader = ({ children }) => {
  return (
    <header className="chores-header">
      {children}
    </header>
  );
};

export { TodoHeader };
