import "./styles.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByQuery } from "../../../redux/actions";

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
    // setName("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar perro..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
