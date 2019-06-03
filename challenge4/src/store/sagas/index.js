import { all, takeLatest } from "redux-saga/effects";

import { ProductsTypes } from "~/store/ducks/products";
import { CategoriesTypes } from "~/store/ducks/categories";

import { listProducts, listProductByCategories } from "./products";
import { listCategories } from "./categories";

export default function* rootSaga() {
  return yield all([
    takeLatest(ProductsTypes.LOAD_REQUEST, listProducts),
    takeLatest(CategoriesTypes.LOAD_CAT_REQUEST, listCategories),
    takeLatest(ProductsTypes.SET_SELECTED_CATEGORY, listProductByCategories)
  ]);
}
