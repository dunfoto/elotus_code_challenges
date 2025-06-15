import React from "react";
import './index.scss'

const SearchBar = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="search-bar">
      <input className={`search-input ${props.className || ""}`} {...props} />
      <button type="submit" className="search-icon">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
