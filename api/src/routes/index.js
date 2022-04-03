const { Router } = require("express");
const router = Router();

// ("/dogs") AND ("/dog/:id"):
const getDogs = require("./getAllDogs");
router.use("/", getDogs);

// ALL TEMPERAMENTS:
const getTemperaments = require("./getTemperaments");
router.use("/", getTemperaments);

// POST DOG:
const postDog = require("./postDog");
router.use("/", postDog);

module.exports = router;
