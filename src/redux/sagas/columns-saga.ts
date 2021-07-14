import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../types";
import { columnsAPI } from "../../api/api";
import { createColumn, deleteColumn, setColumns, updateColumn } from "../reducers/columns-reducer";
import { setAppStatusAC } from "../reducers/auth-reducer";
import { getColumnById } from "../reducers/column-reducer";

type CreateColumnActionType = {
  payload: {
    title: string
    description: string
  }
}
type ColumnIdActionType = {
  payload: {
    columnId: number
  }
}
type UpdateColumnActionType = {
  payload: {
    columnId: number
    title: string
    description: string
  }
}

function* setColumnsWorker(): any {
  const data = yield call(columnsAPI.getColumns);
  yield put(setColumns(data.data));
  yield put(setAppStatusAC("succeeded"));
}

function* setColumnWorker({ payload }: ColumnIdActionType): any {
  yield put(setAppStatusAC("loading"));
  const data = yield call(columnsAPI.getColumnById, payload.columnId);
  const column = data.data;
  yield put(getColumnById({ title: column.title, description: column.description, id: column.id }));
  yield put(setAppStatusAC("succeeded"));
}

function* createColumnWorker({ payload }: CreateColumnActionType): any {
  yield put(setAppStatusAC("loading"));
  const data = yield call(columnsAPI.createColumn, payload.title, payload.description);
  yield put(createColumn(data.data));
  yield put(setAppStatusAC("succeeded"));
}

function* deleteColumnWorker({ payload }: ColumnIdActionType): any {
  yield put(setAppStatusAC("loading"));
  yield call(columnsAPI.deleteColumn, payload.columnId);
  yield put(deleteColumn(payload.columnId));
  yield put(setAppStatusAC("succeeded"));
}

function* updateColumnWorker({ payload }: UpdateColumnActionType): any {
  yield put(setAppStatusAC("loading"));
  const data = yield call(columnsAPI.updateColumn, payload.columnId, payload.title, payload.description);
  console.log(data.data);
  yield put(updateColumn(data.data.id, data.data.title, data.data.description));
  yield put(setAppStatusAC("succeeded"));
}

export function* columnsSaga() {
  yield takeEvery(types.CREATE_COLUMN_REQUESTED, createColumnWorker);
  yield takeEvery(types.FETCH_COLUMNS, setColumnsWorker);
  yield takeEvery(types.DELETE_COLUMN_REQUESTED, deleteColumnWorker);
  yield takeEvery(types.UPDATE_COLUMN_REQUESTED, updateColumnWorker);
  yield takeEvery(types.FETCH_COLUMN, setColumnWorker);
}
