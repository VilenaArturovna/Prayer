import { call, put, takeLatest } from "redux-saga/effects";
import { types } from "../types";
import { prayersAPI } from "../../api/prayersAPI";
import {
  createPrayer,
  deletePrayer,
  getPrayerById,
  setAppStatusAC,
  setPrayers,
  updatePrayer
} from "../reducers/actionCreators";
import { CreatePrayerActionType } from "./types";

type PrayerIdActionType = {
  payload: {
    prayerId: number
  }
}
type UpdatePrayerActionType = {
  payload: {
    title: string
    checked: boolean
    prayerId: number
  }
}

function* setPrayersWorker(): any {
  const data = yield call(prayersAPI.getPrayers);
  yield put(setPrayers(data.data));
}

function* createPrayerWorker({ payload }: { payload: CreatePrayerActionType }): any {
  yield put(setAppStatusAC("loading"));
  try {
    const data = yield call(prayersAPI.createPrayer, payload.title, payload.description, payload.checked, payload.columnId);
    const prayer = data.data;
    yield put(createPrayer({
      title: prayer.title,
      description: prayer.description,
      checked: prayer.checked,
      columnId: prayer.columnId,
      id: prayer.id
    }));
  } catch (e) {
    alert(e)
  }
  yield put(setAppStatusAC("succeeded"));
}

function* deletePrayerWorker({ payload }: PrayerIdActionType) {
  yield put(setAppStatusAC("loading"));
  try {
    yield call(prayersAPI.deletePrayer, payload.prayerId);
    yield put(deletePrayer(payload.prayerId));
  } catch (e) {
    alert(e)
  }
  yield put(setAppStatusAC("succeeded"));
}

function* updatePrayerWorker({ payload }: UpdatePrayerActionType): any {
  yield put(setAppStatusAC("loading"));
  try {
    const data = yield call(prayersAPI.updatePrayer, payload.title, payload.checked, payload.prayerId);
    const prayer = data.data;
    yield put(updatePrayer(prayer.title, prayer.checked, prayer.id));
  } catch (e) {
    alert(e)
  }
  yield put(setAppStatusAC("succeeded"));
}

function* getPrayerWorker({ payload }: PrayerIdActionType): any {
  yield put(setAppStatusAC("loading"));
  try {
    const data = yield call(prayersAPI.getPrayerById, payload.prayerId);
    const prayer = data.data;
    yield put(getPrayerById({
      title: prayer.title,
      description: prayer.description,
      checked: prayer.checked,
      columnId: prayer.columnId,
      id: prayer.id
    }));
  } catch (e) {
    alert(e)
  }
  yield put(setAppStatusAC("succeeded"));
}

export function* prayersSaga() {
  yield takeLatest(types.FETCH_PRAYERS, setPrayersWorker);
  yield takeLatest(types.CREATE_PRAYER_REQUESTED, createPrayerWorker);
  yield takeLatest(types.DELETE_PRAYER_REQUESTED, deletePrayerWorker);
  yield takeLatest(types.UPDATE_PRAYER_REQUESTED, updatePrayerWorker);
  yield takeLatest(types.FETCH_PRAYER, getPrayerWorker);
}
