import {
  GET_ALL_DOGS,
  GET_DOGS_BY_ID,
  GET_DOGS_BY_NAME,
  GET_TEMPERAMENTS,
  RELOAD,
  SET_ORDER_WEIGTH,
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
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload,
      };
    case RELOAD:
      return {
        ...state,
        AllDogsCopy: [],
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
    case SET_ORDER_WEIGTH:
      let orderWeight = [];
      if (payload === "asc") {
        orderWeight = state.dogs.sort((a, b) => {
          return a.weight_min - b.weight_min;
        });
      } else if (payload === "desc") {
        orderWeight = state.dogs.sort((a, b) => {
          return b.weight_min - a.weight_min;
        });
      } else if (payload === "none") {
        orderWeight = state.dogs.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      return {
        ...state,
        dogs: orderWeight,
      };
    default:
      return state;
  }
}

export default reducer;
