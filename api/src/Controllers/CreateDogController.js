const { Temperament, Dog } = require("../db");

const createDog = async (req, res) => {
  /* const {
    name,
    weight_max,
    weight_min,
    height_max,
    height_min,
    lifeSpan,
    temperaments,
    image,
  } = req.body;
    let dogCreate= await Dog.create({
      image, name, weight_min, weight_max, height_min, height_max, lifeSpan
    })
    let tempDb= await Temperament.findAll({
        where: {name: temperaments}
    })
    dogCreate.addTemperament(tempDb);
    console.log(dogCreate)
    res.send('La rza de perro fue creada exitosamente') */

  try {
    const {
      name,
      weight_max,
      weight_min,
      height_max,
      height_min,
      lifeSpan,
      temperaments,
      image,
      createdInDb,
    } = req.body;

    const dbCheck = await Dog.findOne({
      where: {
        name: name,
      },
    });

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
        lifeSpan,
        createdInDb,
      });

      let temperamentDb = await Temperament.findAll({
        where: {
          name: temperaments,
        },
      });
      console.log(temperamentDb);

      newDog.addTemperament(temperamentDb);
      res.status(200).send(newDog);
    }
  } catch (error) {
    //console.log("Created dog Error", error);
    res.status(400).json({ message: "Error creating a new dog" });
  }
};

module.exports = {
  createDog,
};
