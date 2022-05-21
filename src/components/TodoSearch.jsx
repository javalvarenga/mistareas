import React from "react";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
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
