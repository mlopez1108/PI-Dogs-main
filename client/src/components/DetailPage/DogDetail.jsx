import DogDetailCSS from "./styles.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeleteDetail, getDetail } from "../../redux/actions";
import doggie from "../perro.jpg";
import { Link, useParams } from "react-router-dom";

const DogDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
    return function () {
      dispatch(getDeleteDetail());
    };
  }, [dispatch, id]);

  const myDog = useSelector((state) => state.detail);

  return (
    <div className={DogDetailCSS.principal}>
      <div className={DogDetailCSS.app}>
        {myDog.length > 0 ? (
          <div className={DogDetailCSS.details}>
            <div className={DogDetailCSS.big_img}>
              <img
                src={myDog[0].image ? myDog[0].image : doggie}
                alt="Img not found"
              />
            </div>
            <div className={DogDetailCSS.box}>
              <div className={DogDetailCSS.row}>
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
                <button className={DogDetailCSS.back}>Back</button>
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
