import React from "react";
import CardCSS from "./styles.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, temperament, weight }) => {
  return (
    <div className={CardCSS.card}>
      <div className={CardCSS.card_image_container}>
        <Link to={"/dogs/" + id}>
          <img src={image} alt="img not found" />
        </Link>
      </div>
      <div className={CardCSS.card_content}>
        <h3 className={CardCSS.card_title.text__medium}>Name: {name}</h3>
        <div className={CardCSS.card_info}>
          <h5 className={CardCSS.card_temperaments.text__medium}>
            Temperaments: {temperament}
          </h5>
          <h6 className={CardCSS.card_weight.text__medium}>
            Weight (Kg): {weight}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
