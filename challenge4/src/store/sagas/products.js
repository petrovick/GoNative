import { call, put } from "redux-saga/effects";
import api from "~/services/api";

import ProductsActions from "~/store/ducks/products";

export function* listProducts() {
  try {
    console.tron.error("action");
    console.tron.log(action);
    const response = yield call(api.get, "products");
    yield put(ProductsActions.loadSuccess(response.data));
  } catch (err) {
    yield put(ProductsActions.loadFailure());
  }
}

export function* listProductByCategories(action) {
  try {
    const response = yield call(
      api.get,
      `category_products/${action.category.id}`
    );
    yield put(ProductsActions.loadSuccess(response.data.products));
  } catch (err) {
    yield put(ProductsActions.loadFailure());
  }
}
