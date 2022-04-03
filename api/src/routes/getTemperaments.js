const { Router } = require("express");
const axios = require("axios");
const { Temperament } = require("../db");

const router = Router();

const getApiTemperaments = async () => {
  const apiKey = "b419b303-8aea-4533-8ea3-73e93c4c553a";
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`
  );
  const apiTemperaments = await apiUrl.data.map((el) =>
    el.temperament ? el.temperament.split(",") : ["Null"]
  );
  return apiTemperaments;
};

const allTemperaments = async () => {
  let array = [];
  let apiTemperaments = await getApiTemperaments();
  // console.log("aca llegan los temperaments :::: ", apiTemperaments);
  // const splitTemperaments = apiTemperaments.map((el) => el).split(",");
  const deleteSpaceAndPush = apiTemperaments.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      array.push(el[i].trim());
    }
  });
  return array;
};

const getAllTemperaments = async () => {
  const allInfo = await allTemperaments();
  return allInfo;
};

router.get("/temperament", async (req, res) => {
  let temperamentsTotal = await getAllTemperaments();
  try {
    temperamentsTotal.forEach((el) => {
      Temperament.findOrCreate({
        where: {
          name: el,
        },
      });
    });
    const allTemperaments = await Temperament.findAll();
    res.status(200).send(allTemperaments);
  } catch (error) {
    res.status(404).send("NO SE QUE PASO ACA", error);
  }
});

module.exports = router;
