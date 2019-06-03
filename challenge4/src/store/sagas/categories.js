import { call, put } from "redux-saga/effects";
import api from "~/services/api";

import CategoriesActions from "~/store/ducks/categories";
import ProductActions from "~/store/ducks/products";

export function* listCategories() {
  try {
    const response = yield call(api.get, "categories");
    yield put(CategoriesActions.loadCatSuccess(response.data));
    if (response.data[0]) {
      yield put(ProductActions.setSelectedCategory(response.data[0]));
    }
  } catch (err) {
    yield put(CategoriesActions.loadCatFailure());
  }
}
