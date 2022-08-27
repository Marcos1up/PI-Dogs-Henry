const { Dog, Temperament } = require("../db");
const { getApiInfo } = require("../LoadDb/LoadDb");

const getDogById = async (req, res) => {
  const { id } = req.params;
  console.log(!id.includes("-"));
  try {
    if (!id.includes("-")) {
      let idInfo = await getApiInfo();

      let infoFilter = idInfo.find((e) => e.id.toString() === id);
      infoFilter
        ? res.status(200).send(infoFilter)
        : res.status(404).send({ message: "Dog not found" });
    } else {
      const idDb = await Dog.findAll({
        where: {
          id: id,
        },
        include: Temperament,
      });

      idDb.length
        ? res.status(200).send(idDb[0])
        : res.status(404).send({ message: "Id of the dog not found" });
      //console.log(idDb)
    }
  } catch (error) {
    console.log(error + " EROOR EN LA FUNCIÓN DE ID");
  }
};

module.exports = {
  getDogById,
};
