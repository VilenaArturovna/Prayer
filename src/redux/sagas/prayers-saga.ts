import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../types";
import { prayersAPI } from "../../api/api";
import { createPrayer, deletePrayer, setPrayers, updatePrayer } from "../reducers/prayers-reducer";
import { setAppStatusAC } from "../reducers/auth-reducer";
import { getPrayerById } from "../reducers/prayer-reducer";

type CreatePrayerActionType = {
  title: string
  description: string
  checked: boolean
  columnId: number
}
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
  yield takeEvery(types.FETCH_PRAYERS, setPrayersWorker);
  yield takeEvery(types.CREATE_PRAYER_REQUESTED, createPrayerWorker);
  yield takeEvery(types.DELETE_PRAYER_REQUESTED, deletePrayerWorker);
  yield takeEvery(types.UPDATE_PRAYER_REQUESTED, updatePrayerWorker);
  yield takeEvery(types.FETCH_PRAYER, getPrayerWorker);
}
