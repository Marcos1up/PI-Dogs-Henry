import { GET_ALL_DOGS } from "./actions";

const initialState = {
  dogs: [],
  AllDogsCopy: [],
  temperaments: [],
  details: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: payload,
        AllDogsCopy: payload,
      };

    default:
      return state;
  }
}

export default reducer;
