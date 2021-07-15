import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../types";
import { commentsAPI } from "../../api/api";
import { setAppStatusAC } from "../reducers/auth-reducer";
import { createComment, deleteComment, setComments } from "../reducers/comments-reducer";

type CreateCommentActionType = {
  payload: {
    prayerId: number
    body: string
  }
}
type CommentIdActionType = {
  payload: {
    commentId: number
  }
}

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
  yield takeEvery(types.FETCH_COMMENTS, setCommentsWorker);
  yield takeEvery(types.CREATE_COMMENT_REQUESTED, createCommentWorker);
  yield takeEvery(types.DELETE_COMMENT_REQUESTED, deleteCommentWorker);
}
