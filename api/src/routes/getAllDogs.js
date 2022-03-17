// const { Router } = require("express");
// const axios = require("axios");
// const { Dog, Temperament } = require("../db");

// const router = Router();

// const getApiInfo = async () => {
//   const apiKey = "b419b303-8aea-4533-8ea3-73e93c4c553a";
//   const apiUrl = await axios.get(
//     `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`
//   );
//   const apiInfo = await apiUrl.data.map((el) => {
//     return {
//       image: el.image.url,
//       name: el.name,
//       id: el.id,
//       temperament: el.temperament,
//       weight: el.weight.metric,
//       height: el.height.metric,
//     };
//   });
//   return apiInfo;
// };

// const getDbInfo = async () => {
//   return await Dog.findAll({
//     include: {
//       model: Temperament,
//       attributes: ["name"],
//       through: {
//         attributes: [],
//       },
//     },
//   });
// };

// const getAllDogs = async () => {
//   let apiInfo = await getApiInfo();
//   let dbInfo = await getDbInfo();
//   let allInfo = apiInfo.concat(dbInfo);
//   return allInfo;
// };

// router.get("/", async (req, res) => {
//   const name = req.query.name;
//   let dogsTotal = await getAllDogs();
//   if (name) {
//     try {
//       let dogName = await dogsTotal.filter((el) =>
//         el.name.toLowerCase().includes(name.toLowerCase())
//       );
//       if (dogName.length > 0) {
//         res.status(200).send(dogName);
//       }
//     } catch (error) {
//       res.status(404).send(error);
//     }
//   } else {
//     res.status(200).send(dogsTotal);
//   }
// });

// module.exports = router;
