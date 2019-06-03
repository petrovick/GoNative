import { call, put } from "redux-saga/effects";
import api from "~/services/api";

import ProductsActions from "~/store/ducks/products";

export function* listProducts() {
  try {
    const response = yield call(api.get, "products");
    yield put(ProductsActions.loadSuccess(response.data));
  } catch (err) {
    yield put(ProductsActions.loadFailure());
  }
}
