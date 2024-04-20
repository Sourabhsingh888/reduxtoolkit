import { takeLatest, call, put } from "redux-saga/effects";
import { loginSuccess, loginFailure } from "../reducers/LoginSlice";
import { loginAPI } from '../../network/LoginAPI';

function* handleLogin(action) {
    try {
        const user = yield call(loginAPI, action.payload);
        yield put(loginSuccess(user));
        console.log(user)
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

export function* watchLogin() {
    yield takeLatest('auth/loginRequest', handleLogin);
}