import {
  GET_ALL_DOGS,
  GET_DOGS_BY_ID,
  GET_DOGS_BY_NAME,
  SORT_BY_NAME,
} from "./actions";

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
    case GET_DOGS_BY_NAME:
      return {
        ...state,
        dogs: payload,
      };
    case GET_DOGS_BY_ID:
      return {
        ...state,
        perritoId: payload,
      };
    case SORT_BY_NAME:
      if (payload === "desc") {
        return {
          ...state,
          dogs: [...state.dogs].sort((a, b) =>
            a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1
          ),
        };
      }
      return {
        ...state,
        dogs: [...state.dogs].sort((a, b) =>
          a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
        ),
      };

    default:
      return state;
  }
}

export default reducer;
