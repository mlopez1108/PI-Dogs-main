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

router.get("/", async (req, res) => {
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

// const temperaments = () => {
//   let arrayConInfo = [];
//   const saveTemperaments = apiData.data.map((el) => el.temperament);
//   // console.log("TEMP:::::  ", saveTemperaments);
//   for (let i = 0; i < saveTemperaments.length; i++) {
//     for (let j = 0; j < saveTemperaments[i].length; j++) {
//       arrayConInfo.push(saveTemperaments[i][j].split(","));
//     }
//   }
//   console.log("SPLIT ::::   ", arrayConInfo);
//   const stringToArray = splitArray.forEach((el) => {
//     for (let i = 0; i < el.length; i++) {
//       arrayConInfo.push(el[i]);
//     }
//   });
//   return arrayConInfo;
// };
// const finalArray = temperaments();
// console.log("QUE LLEGO ACA ? ::::  ", finalArray);
// // ------------------------------
// finalArray.forEach((el) => {
//   Temperament.findOrCreate({
//     where: { name: el },
//   });
// });
// const allTemperaments = await Temperament.findAll();
// res.status(200).send(allTemperaments);

// Los TEMPERAMENT vienen en un string:
// Separo el STRING cada vez que haya una ","
// SPLIT me devuelve un nuevo arreglo con los elementos

//   const splitTemperaments =  temperaments.map((el) => el.split(","));
//   console.log("SPLIT  :", splitTemperaments);

//   // Array con todos los temperamentos:
//   // Estan repetidos:
//   const arrayTemperaments = () => {
//     let array = [];
//     for (let i = 0; i < splitTemperaments.length; i++) {
//       for (let j = 0; j < splitTemperaments[i].length; j++) {
//         array.push(splitTemperaments[i][j]);
//       }
//     }
//     return array;
//   };

//   const findOrCreateTemperament = arrayTemperaments().forEach((el) => {
//     Temperament.findOrCreate({
//       where: { name: el },
//     });
//   });

//   const allTemperaments = await Temperament.findAll();
//   res.send(allTemperaments);

module.exports = router;
