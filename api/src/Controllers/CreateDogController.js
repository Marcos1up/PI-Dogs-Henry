const { Temperament, Dog } = require("../db");

const createDog = async (req, res) => {
  try {
    const {
      name,
      weight_max,
      weight_min,
      height_max,
      height_min,
      lifeSpan,
      temperament,
      image,
      createdInDb,
    } = req.body;

    const dbCheck = await Dog.findOne({
      where: {
        name: name
      }
    })

    if (dbCheck) {
      res.status(404).send({ message: "The dog is already exist" });
    } else {
      const newDog = await Dog.create({
        name,
        weight_min,
        weight_max,
        height_max,
        height_min,
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
