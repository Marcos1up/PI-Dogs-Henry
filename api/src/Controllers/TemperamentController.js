const { Temperament } = require("../db");
const { getApiInfo } = require("../LoadDb/LoadDb");

const getAllTemperament = async (req, res) => {
  try {
    const check = await Temperament.findAll();
    if (check.length === 0) {
      const apiTemperaments = await getApiInfo();

      let temperamentapi = apiTemperaments
        .map((element) => element.temperament?.split(","))
        .flat();

      temperamentapi.forEach(async (temp) => {
        if (!temp) return;
        const [createdTemp, isCreated] = await Temperament.findOrCreate({
          where: {
            name: temp,
          },
          defaults: {
            name: temp,
          },
        });
        //console.log("pasé por la creacion en la DB")
      });
      const temperamentsDb = await Temperament.findAll();
      res.status(200).send(temperamentsDb);
    } else {
      res.status(200).send(check);
      //console.log("retorné lo de la DB")
    }
  } catch (error) {
    console.log("getAllTemperament Error", error);
  }
};

module.exports = {
  getAllTemperament,
};
