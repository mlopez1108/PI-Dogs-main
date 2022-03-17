import axios from "axios";

export function getDogs() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: "GET_ALL_DOGS",
      payload: json.data,
    });
  };
}

export function getDogsByQuery(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/dogs?name=${name}`);
      return dispatch({
        type: "GET_DOGS_BY_QUERY",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    let info = await axios.get("http://localhost:3001/temperament");
    return dispatch({
      type: "GET_TEMPERAMENTS",
      payload: info.data,
    });
  };
}

export function filterByTemperament(payload) {
  console.log("Filtrar por ::::  ", payload);
  return {
    type: "FILTER_BY_TEMPERAMENT",
    payload,
  };
}

export function postDog(payload) {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/dog", payload);
    console.log(response);
    return response;
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/dogs/" + id);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
