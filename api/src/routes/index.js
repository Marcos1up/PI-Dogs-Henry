const { Router } = require("express");
const { createDog } = require("../Controllers/CreateDogController");
const { getDog } = require("../Controllers/DogController");
const { getDogById } = require("../Controllers/DogIdcontroller");
const { getAllTemperament } = require("../Controllers/TemperamentController");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers

router.get("/dogs", getDog);

router.get("/dogs/:id", getDogById);

router.get("/temperaments", getAllTemperament);

router.post("/create", createDog);

module.exports = router;
