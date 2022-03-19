import "./styles.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByQuery } from "../../../redux/actions";
// import searchIcon from "./search-icon.png";

const SearchBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log("Que escribi? ", name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getDogsByQuery(name));
    setCurrentPage(1);
  }

  return (
    <div className="search">
      <div className="search__input">
        <input
          type="text"
          placeholder="Example: Akita..."
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
