import React from "react";
import FiltersCSS from "./styles.module.css";
import cx from "classnames";

const Filters = ({
  handleFilterByTemperament,
  handleFilterCreated,
  handleSort,
  allTemperaments,
}) => {
  return (
    <div className={FiltersCSS.filters}>
      <div className={FiltersCSS.temperaments}>
        <h4>Filter by temperament:</h4>
        <select
          className={cx(FiltersCSS.temperaments, FiltersCSS.select)}
          onChange={(e) => handleFilterByTemperament(e)}
        >
          {allTemperaments.map((el) => (
            <option value={el.name} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>
      </div>

      <div className={FiltersCSS.dogs}>
        <h4>Filter created/api dogs:</h4>
        <select
          className={cx(FiltersCSS.dogs, FiltersCSS.select)}
          onChange={(e) => handleFilterCreated(e)}
        >
          <option value="all">Todos</option>
          <option value="created">Creados</option>
          <option value="api">Existentes</option>
        </select>
      </div>
      <div className={FiltersCSS.sort}>
        <h4>Sort alphabetically:</h4>
        <select
          className={cx(FiltersCSS.sort, FiltersCSS.select)}
          onChange={(e) => handleSort(e)}
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
