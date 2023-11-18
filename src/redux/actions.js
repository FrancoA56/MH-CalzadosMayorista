import { ADD_ALL_SHOES } from "./types";
import shoes from "../utils/zapatillas.json";

export const addAllShoes = () => {
  return function (dispatch) {
    try {
      const allShoes = shoes.map((shoe) => shoe);
      return dispatch({
        type: ADD_ALL_SHOES,
        payload: allShoes,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
