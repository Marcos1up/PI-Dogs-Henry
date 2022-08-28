import axios from "axios";

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME";
export const GET_DOGS_BY_ID = "GET_DOGS_BY_ID";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const RELOAD = "RELOAD";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SET_ORDER_WEIGTH = "SET_ORDER_WEIGTH";
export const FILTER_TEMPERAMENT = "FILTER_TEMPERAMENT";
export const ORDER_BY_CREATION = "ORDER_BY_CREATION";
export const CREATE_DOG = "CREATE_DOG";

export const getAllDogs = () => {
  return async (dispatch) => {
    try {
      return await axios("http://localhost:3001/dogs").then((res) =>
        dispatch({ type: GET_ALL_DOGS, payload: res.data })
      );
    } catch (error) {
      alert("Every dogs is dead");
    }
  };
};

export function getTemperaments() {
  return async function (dispatch) {
    try {
      const temperaments = await axios.get(
        "http://localhost:3001/temperaments"
      );
      dispatch({
        type: GET_TEMPERAMENTS,
        payload: temperaments.data,
      });
    } catch (error) {
      alert("Temperaments not found");
    }
  };
}

export function getDogByName(name) {
  return async function (dispatch) {
    try {
      const dogsByName = await axios.get(
        `http://localhost:3001/dogs?name=${name}`
      );
      dispatch({
        type: GET_DOGS_BY_NAME,
        payload: dogsByName.data,
      });
    } catch (error) {
      alert("Dog not found");
    }
  };
}

export function getDogById(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/dogs/${id}`);
      dispatch({
        type: GET_DOGS_BY_ID,
        payload: res.data,
      });
    } catch (error) {
      alert("Dog not found");
    }
  };
}

export function resetDogs() {
  return {
    type: RELOAD,
  };
}

export const sortByName = (payload) => {
  return {
    type: SORT_BY_NAME,
    payload,
  };
};

export function orderWeigth(payload) {
  return {
    type: SET_ORDER_WEIGTH,
    payload: payload,
  };
}

export function filterTemperament(payload) {
  return {
    type: FILTER_TEMPERAMENT,
    payload,
  };
}

export function orderByCreation(payload) {
  return {
    type: ORDER_BY_CREATION,
    payload,
  };
}

export function createDog(payload) {
  function primeraLetraMayus(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return async function (dispatch) {
    let newDog = {
      name: primeraLetraMayus(payload.name),
      image: payload.image,
      height_max: payload.height_max,
      height_min: payload.height_min,
      weight_min: payload.weight_min,
      weight_max: payload.weight_max,
      lifeSpan: payload.lifeSpan,
      temperaments: payload.temperament,
    };
    const res = await axios.post("http://localhost:3001/create", newDog);
    return {
      type: CREATE_DOG,
      payload: res,
    };
  };
}

/* 

name: "",
        image: "",
        weight_max: "",
        weight_min: "",
        height_max: "",
        height_min: "",
        lifeSpan: "",
        temperament: [],

router.get("/dogs", getDog);

router.get("/dogs/:id", getDogById);

router.get("/temperaments", getAllTemperament);

router.post("/create", createDog);

*/
