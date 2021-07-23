import { call, put, takeLatest } from "redux-saga/effects";
import { types } from "../types";
import { commentsAPI } from "../../api/commentsAPI";
import { createComment, deleteComment, setAppStatusAC, setComments } from "../reducers/actionCreators";
import { CommentIdActionType, CreateCommentActionType } from "./types";

function* setCommentsWorker(): any {
  yield put(setAppStatusAC("loading"));
  try {
    const data = yield call(commentsAPI.getComments);
    yield put(setComments(data.data));
  } catch (e) {
    alert(e)
  }
  yield put(setAppStatusAC("succeeded"));
}

function* createCommentWorker({ payload }: CreateCommentActionType): any {
  yield put(setAppStatusAC("loading"));
  try {
    const data = yield call(commentsAPI.createComment, payload.prayerId, payload.body);
    const comment = data.data;
    yield put(createComment({
      prayerId: payload.prayerId,
      id: comment.id,
      body: comment.body,
      created: comment.created
    }));
  } catch (e) {
    alert(e)
  }
  yield put(setAppStatusAC("succeeded"));
}

function* deleteCommentWorker({ payload }: CommentIdActionType): any {
  yield put(setAppStatusAC("loading"));
  try {
    yield call(commentsAPI.deleteComment, payload.commentId);
    yield put(deleteComment(payload.commentId));
  } catch (e) {
    alert(e)
  }
  yield put(setAppStatusAC("succeeded"));
}


export function* commentsSaga() {
  yield takeLatest(types.FETCH_COMMENTS, setCommentsWorker);
  yield takeLatest(types.CREATE_COMMENT_REQUESTED, createCommentWorker);
  yield takeLatest(types.DELETE_COMMENT_REQUESTED, deleteCommentWorker);
}
