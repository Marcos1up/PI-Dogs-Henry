const { getAllDogs } = require("../LoadDb/LoadDb");

const getDog = async (req, res) => {
  const name = req.query.name;
  try {
    let AllDogs = await getAllDogs();
    if (name) {
      let dogName = AllDogs.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      dogName.length
        ? res.status(200).send(dogName)
        : res.status(400).send({
            message: "Can't find the dog with the name you are looking for",
          });
    } else {
      AllDogs.length
        ? res.status(200).send(AllDogs)
        : res.status(404).send({ message: "Dog's not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getDog,
};
