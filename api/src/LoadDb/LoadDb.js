const axios = require("axios");
const { API_KEY } = process.env;
const { Temperament, Dog } = require("../db");

const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;
const dog404 =
  "https://st2.depositphotos.com/1229718/8159/i/950/depositphotos_81597492-stock-photo-404-error.jpg";

async function getApiInfo() {
  const dataApi = (await axios.get(URL)).data;
  const resultApi = dataApi.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.image.url ? e.image.url : dog404, //imagen de respaldo por si no encuentra jaja
      breed_group: e.breed_group,
      temperament: e.temperament ? e.temperament : "Dog without temperament", //hay razas sin temperamentos
      life_span: e.life_span,
      weight_min: parseInt(e.weight.metric.slice(0, 2).trim()),
      weight_max: parseInt(e.weight.metric.slice(4).trim()),
      height_min: parseInt(e.height.metric.slice(0, 2).trim()),
      height_max: parseInt(e.height.metric.slice(4).trim()),
    };
  });
  //await Dog.bulkCreate(resultApi);
  return resultApi;
}

const getDBInfoDog = async () => {
  var dogsDB = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return dogsDB;
};

const getAllDogs = async () => {
  const apiInfo = await getApiInfo();
  const DBInfo = await getDBInfoDog();
  const totalInfo = apiInfo.concat(DBInfo);
  return totalInfo;
};

module.exports = {
  getApiInfo,
  getDBInfoDog,
  getAllDogs,
};
