import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, temperament, weight }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <Link to={"/dogs/" + id}>
          <img src={image} alt="img not found" />
        </Link>
      </div>
      <div className="card-content">
        <h3 className="card-title text--medium">Name: {name}</h3>
        <div className="card-info">
          <h5 className="card-temperaments text--medium">
            Temperaments: {temperament}
          </h5>
          <h6 className="card-weight text--medium">Weight (Kg): {weight}</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
