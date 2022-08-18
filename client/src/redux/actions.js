import axios from "axios";

export const GET_ALL_DOGS = "GET_ALL_DOGS";

export const getAllDogs = () => {
  return async (dispatch) => {
    return await axios("http://localhost:3001/dogs").then((res) =>
      dispatch({ type: GET_ALL_DOGS, payload: res.data })
    );
  };
};

/* 

router.get("/dogs", getDog);

router.get("/dogs/:id", getDogById);

router.get("/temperaments", getAllTemperament);

router.post("/create", createDog);

*/
