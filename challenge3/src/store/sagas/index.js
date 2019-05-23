import { all, takeLatest, put, call, select } from "redux-saga/effects";
import api from "~/services/api";

import { Creators as UserActions, Types as UserTypes } from "../ducks/user";

function* searchUser(action) {
    try {
        console.tron.warn(`Username: ${action.payload.data.username}`);
        const { data } = yield call(
            api.get,
            `/users/${action.payload.data.username}`
        );
        console.tron.warn(`Antes do success`);
        console.tron.warn(data);
        yield put(
            UserActions.userSearchSuccess({
                user: data,
                latitude: action.payload.data.coordenada.latitude,
                longitude: action.payload.data.coordenada.longitude
            })
        );
    } catch (error) {
        console.tron.error(`Erro ao success: ${error}.`);
        yield put(UserActions.userSearchFailure());
    }
}

export default function* rootSaga() {
    return yield all([takeLatest(UserTypes.SEARCH_REQUEST, searchUser)]);
}
