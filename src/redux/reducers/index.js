import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer,addsearchinput } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  addSearch:addsearchinput,
});
export default reducers;
