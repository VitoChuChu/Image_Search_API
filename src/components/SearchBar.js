import React from "react";

const SearchBar = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="mb-3">
      <input type="text" onChange={inputHandler} className="me-1" />
      <button type="submit" onClick={search} className="ms-1">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
