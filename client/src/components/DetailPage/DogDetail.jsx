import "./styles.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import doggie from "../perro.jpg";
import { Link, useParams } from "react-router-dom";

const DogDetail = () => {
  // console.log("PROPS :::  ", props);
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  const myDog = useSelector((state) => state.detail);

  return (
    <div className="principal">
      <div className="app">
        {myDog.length > 0 ? (
          <div className="details">
            <div className="big-img">
              <img
                src={myDog[0].image ? myDog[0].image : doggie}
                alt="Img not found"
              />
            </div>
            <div className="box">
              <div className="row">
                <h2>Name: {myDog[0].name}</h2>
              </div>
              <p>
                Temperament:{" "}
                {myDog[0].temperament
                  ? myDog[0].temperament
                  : myDog[0].temperaments.map((temp) => temp.name + ", ")}
              </p>
              <p>Weight (kg): {myDog[0].weight}</p>
              <p>Height (cm): {myDog[0].height}</p>
              <p>
                Life span:{" "}
                {myDog[0].life_span ? myDog[0].life_span : "Campo vacio"}
              </p>
              <Link to="/home">
                <button className="back">Back</button>
              </Link>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DogDetail;

// {myDog.length > 0 ? (
//   <div>
//     <h1>Name: {myDog[0].name}</h1>
//     <img
//       src={myDog[0].image ? myDog[0].image : doggie}
//       alt="Img not found"
//     />
//     <h2>Height (cm): {myDog[0].height}</h2>
//     <p>
//       Temperament:{" "}
//       {myDog[0].temperament
//         ? myDog[0].temperament
//         : myDog[0].temperaments.map((temp) => temp.name + ", ")}
//     </p>
//     <p>Weight (kg): {myDog[0].weight}</p>
//     <p>
//       Life span: {myDog[0].life_span ? myDog[0].life_span : "Campo vacio"}
//     </p>
//   </div>
// ) : (
//   <p>Loading...</p>
// )}
// <Link to="/home">
//   <button>Back</button>
// </Link>
