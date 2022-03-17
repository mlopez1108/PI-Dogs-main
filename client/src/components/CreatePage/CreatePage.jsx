import "./styles.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../../redux/actions";
import Form from "./form/Form";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Se requiere un nombre";
  } else if (!input.height) {
    errors.height = "Se requiere una altura";
  } else if (!input.weight) {
    errors.weight = "Se requiere un peso";
  } else if (!input.temperament) {
    errors.temperament = "Seleccionar al menos un temperamento";
  }
  return errors;
}
// else if (/\d/.test(input.name)) {
// errors.name = "El nombre NO puede contener numeros";
// {

const CreatePage = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperament: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("QUE ES ESTO :", input);
    dispatch(postDog(input));
    alert("PERRO CREADO CON EXITO!");
    setInput({
      name: "",
      height: "",
      weight: "",
      life_span: "",
      temperament: [],
    });
  }

  function handleDelete(el) {
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== el),
    });
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <div>
      <Link to="/home">
        <button>VOLVER</button>
      </Link>
      <h1>Create tu perro!</h1>
      <Form
        input={input}
        temperaments={temperaments}
        handleChange={handleChange}
        handleSelect={handleSelect}
        handleSubmit={handleSubmit}
        errors={errors}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default CreatePage;
