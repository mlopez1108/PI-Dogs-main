import React from "react";

const Filters = ({
  handleFilterByTemperament,
  handleFilterCreated,
  handleSort,
  allTemperaments,
}) => {
  return (
    <div>
      <select onChange={(e) => handleFilterByTemperament(e)}>
        {allTemperaments.map((el) => (
          <option value={el.name} key={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      <select onChange={(e) => handleFilterCreated(e)}>
        <option value="all">Todos</option>
        <option value="created">Creados</option>
        <option value="api">Existentes</option>
      </select>
      <select onChange={(e) => handleSort(e)}>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  );
};

export default Filters;
