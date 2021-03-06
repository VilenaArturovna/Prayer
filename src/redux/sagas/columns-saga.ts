import { call, put, takeLatest } from "redux-saga/effects";
import { types } from "../types";
import { columnsAPI } from "../../api/columnsAPI";
import {
  createColumn,
  deleteColumn,
  getColumnById,
  setAppStatusAC,
  setColumns,
  updateColumn
} from "../reducers/actionCreators";
import { ColumnIdActionType, CreateColumnActionType, UpdateColumnActionType } from "./types";

function* setColumnsWorker(): any {
  try {
    yield put(setAppStatusAC("succeeded"));
    const data = yield call(columnsAPI.getColumns);
    yield put(setColumns(data.data));
    yield put(setAppStatusAC("succeeded"));
  } catch (e) {
    alert(e)
  }
}

function* setColumnWorker({ payload }: ColumnIdActionType): any {
  try {
    yield put(setAppStatusAC("loading"));
    const data = yield call(columnsAPI.getColumnById, payload.columnId);
    const column = data.data;
    yield put(getColumnById({ title: column.title, description: column.description, id: column.id }));
    yield put(setAppStatusAC("succeeded"));
  } catch (e) {
    alert(e)
  }
}

function* createColumnWorker({ payload }: CreateColumnActionType): any {
  try {
    yield put(setAppStatusAC("loading"));
    const data = yield call(columnsAPI.createColumn, payload.title, payload.description);
    yield put(createColumn(data.data));
    yield put(setAppStatusAC("succeeded"));
  } catch (e) {
    alert(e)
  }
}

function* deleteColumnWorker({ payload }: ColumnIdActionType): any {
  try {
    yield put(setAppStatusAC("loading"));
    yield call(columnsAPI.deleteColumn, payload.columnId);
    yield put(deleteColumn(payload.columnId));
    yield put(setAppStatusAC("succeeded"));
  } catch (e) {
    alert(e)
  }
}

function* updateColumnWorker({ payload }: UpdateColumnActionType): any {
  try {
    yield put(setAppStatusAC("loading"));
    const data = yield call(columnsAPI.updateColumn, payload.columnId, payload.title, payload.description);
    yield put(updateColumn(data.data.id, data.data.title, data.data.description));
    yield put(setAppStatusAC("succeeded"));
  }catch (e) {
    alert(e)
  }
}

export function* columnsSaga() {
  yield takeLatest(types.CREATE_COLUMN_REQUESTED, createColumnWorker);
  yield takeLatest(types.FETCH_COLUMNS, setColumnsWorker);
  yield takeLatest(types.DELETE_COLUMN_REQUESTED, deleteColumnWorker);
  yield takeLatest(types.UPDATE_COLUMN_REQUESTED, updateColumnWorker);
  yield takeLatest(types.FETCH_COLUMN, setColumnWorker);
}
