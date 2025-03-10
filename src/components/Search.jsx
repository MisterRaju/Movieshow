import React from "react";

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="Search Image Icon" />
        <input
          type="text"
          placeholder="Search through millions of movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
