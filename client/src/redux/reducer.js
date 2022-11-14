import {
  GET_ALL_DOGS,
  GET_TEMPERAMENTS,
  GET_DOGS_BY_ID,
  GET_DOGS_BY_NAME,
  RELOAD,
  SET_ORDER_WEIGTH,
  SORT_BY_NAME,
  FILTER_TEMPERAMENT,
  ORDER_BY_CREATION,
  CREATE_DOG,
  RESET_DETAILS,
} from "./actions";

const initialState = {
  dogs: [],
  AllDogsCopy: [],
  temperaments: [],
  perritoId: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: payload,
        AllDogsCopy: payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload,
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
    case RESET_DETAILS:
      return {
        ...state,
        perritoId: [],
      };
    case RELOAD:
      return {
        ...state,
        AllDogsCopy: [],
      };
    case SORT_BY_NAME:
      const sortedArr =
        payload === "none"
          ? state.dogs
          : payload === "asc"
          ? state.dogs.sort((a, b) => a.name.localeCompare(b.name))
          : state.dogs.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        dogs: sortedArr,
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
    case FILTER_TEMPERAMENT:
      const allDogsTemp = state.AllDogsCopy;
      const tempFilter =
        payload === "temperament"
          ? allDogsTemp
          : allDogsTemp.filter((t) => t.temperament?.includes(payload));
      return {
        ...state,
        dogs: tempFilter,
      };
    case ORDER_BY_CREATION:
      let all = state.AllDogsCopy;
      let byDb = [];
      if (payload === "all") {
        byDb = all;
      } else if (payload === "api") {
        byDb = all.filter((d) => d.id <= 270);
      } else if (payload === "mydogs") {
        byDb = all.filter((d) => d.id.length >= 4);
      }
      return {
        ...state,
        dogs: byDb,
      };
    case CREATE_DOG:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default reducer;
