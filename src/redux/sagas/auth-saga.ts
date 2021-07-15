import { call, put, takeEvery } from "redux-saga/effects";
import { authAPI, SignInParamsType, SignInResponseType, SignUpParamsType } from "../../api/api";
import { types } from "../types";
import { logOutAC, setTokenAC, signInAC } from "../reducers/auth-reducer";

type ActionSignUpType = {
  payload: SignUpParamsType
}
type ActionSignInType = {
  payload: SignInParamsType
}

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
  try {
    const data = yield call(authAPI.signUp, payload);
    yield call(signInUp, data.data)
  } catch (e) {
    alert(e);
  }
}
function* signInWorker({payload}: ActionSignInType): any {
  try {
    const data = yield call(authAPI.signIn, payload);
    yield call(signInUp, data.data)
  } catch (e) {
    alert(e);
  }
}
function* setTokenWorker({payload}: {payload: {token: string}}) {
  yield put(setTokenAC(payload.token))
}
function* logOutWorker() {
  yield put(logOutAC())
  yield call(authAPI.setIsLoggedInToAsyncStorage, false)
  yield call(authAPI.setTokenToAsyncStorage, '')
}

export function* authSaga() {
  yield takeEvery(types.SIGN_UP_REQUESTED, signUpWorker);
  yield takeEvery(types.SIGN_IN_REQUESTED, signInWorker);
  yield takeEvery(types.SET_TOKEN_REQUESTED, setTokenWorker);
  yield takeEvery(types.LOG_OUT_REQUESTED, logOutWorker)
}
