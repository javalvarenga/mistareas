import React from "react";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        onChange={onSearchValueChange}
        className="searchInput"
        placeholder="leer"
      />
    </>
  );
};

export { TodoSearch };
