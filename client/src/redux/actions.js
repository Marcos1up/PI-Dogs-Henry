import axios from "axios";

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME";
export const GET_DOGS_BY_ID = "GET_DOGS_BY_ID";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const RELOAD = "RELOAD";
export const SET_ORDER_WEIGTH = "SET_ORDER_WEIGTH";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";

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

export function getTemperaments() {
  return async function (dispatch) {
    try {
      const temperaments = await axios.get(
        "http://localhost:3001/temperaments/"
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

/* 

router.get("/dogs", getDog);

router.get("/dogs/:id", getDogById);

router.get("/temperaments", getAllTemperament);

router.post("/create", createDog);

*/
