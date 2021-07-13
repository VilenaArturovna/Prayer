import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../types";
import { columnsAPI } from "../../api/api";

function* setColumnsWorker(): any {
  const data = yield call(columnsAPI.getColumns);
  yield put({ type: types.SET_COLUMNS, columns: data.data });
  yield put({ type: types.APP_SET_STATUS, status: "succeeded" });
}

function* setColumn(action: { payload: { id: number } }): any {
  const data = yield call(columnsAPI.getColumnById, action.payload.id);
}
type CreateColumnActionType = {
  payload: {
    title: string
    description: string
  }
}
function* createColumn({payload}: CreateColumnActionType): any {
  const data = yield call(columnsAPI.createColumn, payload.title, payload.description);
  yield put({ type: types.CREATE_COLUMN, title: data.data.title, description: data.data.description });
}
type DeleteColumnActionType = {
  payload: {
    columnId: number
  }
}
function* deleteColumn({ payload }: DeleteColumnActionType): any {
  yield call(columnsAPI.deleteColumn, payload.columnId);
}

type UpdateColumnActionType = {
  payload: {
    columnId: number
    title: string
    description: string
  }
}

function* updateColumn({ payload }: UpdateColumnActionType): any {
  const data = yield call(columnsAPI.updateColumn, payload.columnId, payload.title, payload.description)
  yield put({type: types.UPDATE_COLUMN, columnId: data.data.columnId, title: data.data.title, description: data.data.description })
}

export function* columnsSaga() {
  yield takeEvery(types.CREATE_COLUMN_REQUESTED, createColumn);
  yield takeEvery(types.FETCH_COLUMNS, setColumnsWorker);
  yield takeEvery(types.DELETE_COLUMN_REQUESTED, deleteColumn);
  yield takeEvery(types.UPDATE_COLUMN_REQUESTED, updateColumn)
}
