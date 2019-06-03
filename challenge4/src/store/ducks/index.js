import { combineReducers } from "redux";
import { reducer as products } from "./products";
import { reducer as cart } from "./cart";
import { reducer as categories } from "./categories";

export default combineReducers({
  products,
  cart,
  categories
});
