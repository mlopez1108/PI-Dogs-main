import React, { useState, useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByTemperament,
  filterCreated,
  getDogs,
  getTemperaments,
  orderByName,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "./card/Card";
import Filters from "./filters/Filters";
import Pagination from "./pagination/Pagination";
import SearchBar from "./searchBar/SearchBar";
import doggie from "../perro.jpg";

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
    return "Sin temperamento";
    // const array = arreglo.map((el) => el.name + ", ");
    // console.log("QUE HAY ACA ???", array);
    // return array;
  }

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <div className="home__page">
      <div className="header">
        <h1>HOLA PERREQUES</h1>
        <Link to="/dog">CREATE DOG</Link>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Volver a cargar todos los perreques
        </button>
        <SearchBar setCurrentPage={setCurrentPage} />
        <Filters
          handleFilterByTemperament={handleFilterByTemperament}
          handleFilterCreated={handleFilterCreated}
          handleSort={handleSort}
          allTemperaments={allTemperaments}
        />
        <div className="pagination">
          <Pagination
            allDogs={allDogs.length}
            dogsPerPage={dogsPerPage}
            paginado={paginado}
          />
        </div>
      </div>

      <main>
        <div className="cards">
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

// typeof el.temperament === "string"
//                       ? el.temperament
//                       : arrayDeObjetos(el.temperaments)
