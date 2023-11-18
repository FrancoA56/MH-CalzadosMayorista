import { ADD_ALL_SHOES } from "./types";

const initialState = {
  shoes: [],
  allShoes: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ALL_SHOES:
      return {
        ...state,
        shoes: payload,
        allShoes: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
