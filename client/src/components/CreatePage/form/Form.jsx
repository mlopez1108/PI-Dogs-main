import React from "react";
// import { getTemperaments } from "../../../redux/actions";

const Form = ({
  input,
  temperaments,
  handleChange,
  handleSelect,
  handleSubmit,
  errors,
  handleDelete,
}) => {
  return (
    <React.Fragment>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre..."
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Altura (cm):</label>
          <input
            type="text"
            placeholder="23 - 29"
            value={input.height}
            name="height"
            onChange={(e) => handleChange(e)}
          />
          {errors.height && <p className="error">{errors.height}</p>}
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="text"
            placeholder="23 - 27"
            value={input.weight}
            name="weight"
            onChange={(e) => handleChange(e)}
          />
          {errors.weight && <p className="error">{errors.weight}</p>}
        </div>
        <div>
          <label>Años de vida:</label>
          <input
            type="text"
            placeholder="10 - 13 years"
            value={input.life_span}
            name="life_span"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <select onChange={(e) => handleSelect(e)}>
          {temperaments.map((el) => (
            <option value={el.name}>{el.name}</option>
          ))}
        </select>
        <ul>
          <li>{input.temperament.map((el) => el + " ,")}</li>
        </ul>
        {errors.temperament && <p className="error">{errors.temperament}</p>}
        <button type="submit">Enviar</button>
      </form>
      {input.temperament.map((el) => (
        <div className="divTemp">
          <p>{el}</p>
          <button className="botonX" onClick={() => handleDelete(el)}>
            x
          </button>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Form;
