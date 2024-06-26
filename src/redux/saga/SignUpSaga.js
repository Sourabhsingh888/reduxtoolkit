// src/store/authSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { signupSuccess, signupFailure } from '../reducers/SignUpSlice';
import { signupAPI } from '../../network/SignUpAPI';

function* handleSignup(action) {
  try {
    const user = yield call(signupAPI, action.payload);
    yield put(signupSuccess(user));
    console.log(user)
  } catch (error) {
    yield put(signupFailure(error.message));
  }
}

export function* watchSignup() {
  yield takeLatest('auth/signupRequest', handleSignup);
}
