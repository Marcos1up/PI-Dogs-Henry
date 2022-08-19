import axios from "axios";

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME";
export const GET_DOGS_BY_ID = "GET_DOGS_BY_ID";

export const getAllDogs = () => {
  return async (dispatch) => {
    return await axios("http://localhost:3001/dogs").then((res) =>
      dispatch({ type: GET_ALL_DOGS, payload: res.data })
    );
  };
};

export function getDogByName(name) {    //para el searchBar
  return async function (dispatch) {
    const dogsByName = await axios.get(
      `http://localhost:3001/dogs?name=${name}`
    );
    dispatch({
      type: GET_DOGS_BY_NAME,
      payload: dogsByName.data,
    });
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
      alert("Dog not found")
    }
  };
}

/* 

router.get("/dogs", getDog);

router.get("/dogs/:id", getDogById);

router.get("/temperaments", getAllTemperament);

router.post("/create", createDog);

*/
