import { combineReducers } from "redux";
import { reducer as products } from "./products";
import { reducer as cart } from "./cart";

export default combineReducers({
  products,
  cart
});
