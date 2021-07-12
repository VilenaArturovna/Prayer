import { call, put, takeEvery } from "redux-saga/effects";
import { authAPI, SignInParamsType, SignUpParamsType } from "../../api/api";
import { types } from "../reducers/types";

type ActionSignUpType = {
  type: types.SIGN_UP
  payload: SignUpParamsType
}
type ActionSignInType = {
  type: types.SIGN_UP
  payload: SignInParamsType
}

function* signUpWorker({payload}: ActionSignUpType): any {
  try {
    const data = yield call(authAPI.signUp, payload);
    yield alert(JSON.stringify(data));
  } catch (e) {
    yield alert(e);
  }
}
function* signInWorker({payload}: ActionSignInType): any {
  try {
    const data = yield call(authAPI.signIn, payload);
    yield alert(JSON.stringify(data));
  } catch (e) {
    yield alert(e);
  }
}

export function* authSaga() {
  yield takeEvery(types.SIGN_UP, signUpWorker);
  yield takeEvery(types.SIGN_IN, signInWorker)
}
