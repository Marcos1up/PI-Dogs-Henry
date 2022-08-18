const { Temperament, Dog } = require("../db");

const createDog = async (req, res) => {
  try {
    const {
      name,
      weightMax,
      weightMin,
      heightMax,
      heightMin,
      lifeSpan,
      temperament,
      image,
      createdInDb,
    } = req.body;

    if (
      !name ||
      !weightMax ||
      !weightMin ||
      !heightMax ||
      !heightMin ||
      !lifeSpan ||
      !temperament
    ) {
      res.status(404).send({ message: "Missing data" }); //convertirlo en ALERTA
    } else {
      const newDog = await Dog.create({
        name,
        weightMin,
        weightMax,
        heightMax,
        heightMin,
        image,
        temperament,
        lifeSpan,
        createdInDb,
      });

      let temperamentDb = await Temperament.findAll({
        where: {
          name: temperament,
        },
      });

      await newDog.addTemperament(temperamentDb);
      res.status(200).send(newDog);
    }
  } catch (error) {
    console.log("Created dog Error", error);
    res.status(400).json({ message: "Error creating a new dog" });
  }
};

module.exports = {
  createDog,
};
