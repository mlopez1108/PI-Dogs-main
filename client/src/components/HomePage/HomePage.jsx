import React, { useState, useEffect } from "react";
import HomeCSS from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByTemperament,
  filterCreated,
  getDogs,
  getTemperaments,
  orderByName,
} from "../../redux/actions";
import Card from "./card/Card";
import Filters from "./filters/Filters";
import Pagination from "./pagination/Pagination";
import doggie from "../perro.jpg";
import Navbar from "./navbar/Navbar";

const HomePage = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const allTemperaments = useSelector((state) => state.temperaments);
  // ------------------------------------------------
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleFilterByTemperament(e) {
    dispatch(filterByTemperament(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  }

  function arrayDeObjetos(elemento) {
    if (elemento.temperament) {
      return elemento.temperament;
    }
    if (elemento.temperaments) {
      for (let i = 0; i < elemento.temperaments.length; i++) {
        return elemento.temperament[i].name + ", ";
      }
    }
    return "Temperament: empty";
  }

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <div className={HomeCSS.home__page}>
      <Navbar setCurrentPage={setCurrentPage} />
      <h1>Wololooo!</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reload dogs
      </button>
      <Filters
        handleFilterByTemperament={handleFilterByTemperament}
        handleFilterCreated={handleFilterCreated}
        handleSort={handleSort}
        allTemperaments={allTemperaments}
      />
      <div className={HomeCSS.pagination}>
        <Pagination
          allDogs={allDogs.length}
          dogsPerPage={dogsPerPage}
          paginado={paginado}
        />
      </div>

      <main>
        <div className={HomeCSS.cards}>
          {currentDogs.map((el) => {
            return (
              <React.Fragment key={el.id}>
                <Card
                  id={el.id}
                  image={el.image ? el.image : doggie}
                  name={el.name}
                  temperament={arrayDeObjetos(el)}
                  weight={el.weight}
                  key={el.id}
                />
              </React.Fragment>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
