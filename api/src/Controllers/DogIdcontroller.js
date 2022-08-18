const { Dog, Temperament } = require("../db");
const { getApiInfo } = require("../LoadDb/LoadDb");

const getDogById = async (req, res) => {
  const { id } = req.params;
  try {
    if (id.includes("-")) {
      const idDb = await Dog.findOne({
        where: {
          id: id,
        },
        include: Temperament,
      });

      idDb.length
        ? res.status(200).send(idDb)
        : res.status(404).send({ message: "Id of the dog not found" }); //saldrá como alerta ??
        console.log(idDb)
    } else {
      let idInfo = await getApiInfo();

      let infoFilter = idInfo.find((e) => e.id.toString() === id);
      infoFilter
        ? res.status(200).send(infoFilter)
        : res.status(404).send({ message: "Dog not found" });
    }
  } catch (error) {
    console.log(error + " EROOR EN LA FUNCIÓN DE ID");
  }
};

module.exports = {
  getDogById,
};
