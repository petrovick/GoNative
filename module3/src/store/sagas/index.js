import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
// call faz chamadas que retorna promises
// put faz o mesmo trabalho do dispatch

import { Creators as LoginActions, Types as LoginTypes } from '~/store/ducks/login';
import {
  Creators as RepositoriesActions,
  Types as RepositoriesTypes,
} from '~/store/ducks/repositories';

import api from '~/services/api';
import { navigate } from '~/services/navigation';

function* login(action) {
  try {
    const { username } = action.payload;

    yield call(api.get, `/users/${username}`);

    yield put(LoginActions.loginSuccess(username));

    navigate('Repositories');
  } catch (err) {
    console.tron.log('Entrou aqui na chamada');
    console.tron.log(err);
    yield put(LoginActions.loginFailure());
  }
}

function* loadRepositories() {
  try {
    const { username } = yield select(state => state.login);
    const response = yield call(api.get, `/users/${username}/repos`);

    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data));
  } catch (error) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}

//* eh como o async
// async nao eh utilizado pq eh feito pelo generator do babel e o async nao tem funcionalidade que o *(generato tem)
export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, login),
    takeLatest(RepositoriesTypes.LOAD_REQUEST, loadRepositories),
  ]);
}
