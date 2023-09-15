import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
const initialState = {
  searchInput: '', 
};

export const addsearchinput = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.ADD_SEARCH_INPUT:
      return {
        ...state,
        searchInput: payload, 
      };
    default:
      return state;
  }
};
