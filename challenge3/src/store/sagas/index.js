import {
  all, takeLatest, put, call, select,
} from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as UserActions, Types as UserTypes } from '../ducks/user';

function* searchUser(action) {
  try {
    console.tron.log('console.tron.log(action.payload);');
    console.tron.log(action.payload);
    const { data } = action.payload;
    const response = yield call(api.get(), `/users/${data.username}`);

    yield put(UserActions.userSearchSuccess(response.data));
  } catch (error) {
    yield put(UserActions.userSearchFailure());
  }
}

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.SEARCH_REQUEST, searchUser)]);
}
