const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
  let { name, height, weight, life_span, temperament, createdInDb } = req.body;

  let dogCreated = await Dog.create({
    name,
    height,
    weight,
    life_span,
    createdInDb,
  });

  let temperamentDb = await Temperament.findAll({
    where: {
      name: temperament,
    },
  });
  dogCreated.addTemperament(temperamentDb);
  res.send("Dog created");
});

module.exports = router;
