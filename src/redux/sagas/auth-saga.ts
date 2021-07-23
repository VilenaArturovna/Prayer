import { call, put, takeLatest } from "redux-saga/effects";
import { types } from "../types";
import { authAPI } from "../../api/authAPI";
import { SignInResponseType } from "../../api/types";
import { logOutAC, setAppStatusAC, setTokenAC, signInAC } from "../reducers/actionCreators";
import { ActionSignInType, ActionSignUpType } from "./types";

function* signInUp(data: any) {
  if (data.id) {
    const userData: SignInResponseType = data
    yield put(signInAC({
      id: userData.id,
      email: userData.email,
      name: userData.name,
      token: userData.token
    }))
    yield call(authAPI.setIsLoggedInToAsyncStorage, true)
    yield call(authAPI.setTokenToAsyncStorage, userData.token)
  } else {
    alert(data.message)
  }
}

function* signUpWorker({payload}: ActionSignUpType): any {
  yield put(setAppStatusAC("loading"));
  try {
    const data = yield call(authAPI.signUp, payload);
    yield call(signInUp, data.data)
  } catch (e) {
    alert(e);
  }
  yield put(setAppStatusAC("succeeded"));
}
function* signInWorker({payload}: ActionSignInType): any {
  yield put(setAppStatusAC("loading"));
  try {
    const data = yield call(authAPI.signIn, payload);
    yield call(signInUp, data.data)
  } catch (e) {
    alert(e);
  }
  yield put(setAppStatusAC("succeeded"));
}
function* setTokenWorker({payload}: {payload: {token: string}}) {
  yield put(setAppStatusAC("loading"));
  yield put(setTokenAC(payload.token))
  yield put(setAppStatusAC("succeeded"));
}
function* logOutWorker() {
  yield put(setAppStatusAC("loading"));
  yield put(logOutAC())
  yield call(authAPI.setIsLoggedInToAsyncStorage, false)
  yield call(authAPI.setTokenToAsyncStorage, '')
  yield put(setAppStatusAC("succeeded"));
}

export function* authSaga() {
  yield takeLatest(types.SIGN_UP_REQUESTED, signUpWorker);
  yield takeLatest(types.SIGN_IN_REQUESTED, signInWorker);
  yield takeLatest(types.SET_TOKEN_REQUESTED, setTokenWorker);
  yield takeLatest(types.LOG_OUT_REQUESTED, logOutWorker)
}
