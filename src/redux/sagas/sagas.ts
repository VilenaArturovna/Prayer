import {all} from 'redux-saga/effects'
import { columnsSaga } from "./columns-saga";
import { prayersSaga } from "./prayers-saga";
import { commentsSaga } from "./comments-saga";
import { authSaga } from "./auth-saga";

export function* sagas() {
  yield all([authSaga(), columnsSaga(), prayersSaga(), commentsSaga()])
}
