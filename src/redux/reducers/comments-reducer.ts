import { CommentType } from "../../api/api";
import { types } from "../types";

const initialState: Array<CommentType> = [];
type ActionType =
  ReturnType<typeof setComments> |
  ReturnType<typeof createComment> |
  ReturnType<typeof deleteComment>

export const commentsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case types.SET_COMMENTS:
      return action.comments.map(comment => ({ ...comment }));
    case types.CREATE_COMMENT:
      return [...state, { ...action.comment }];
    case types.DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.commentId);
    default:
      return state;
  }
};

export const setComments = (comments: Array<CommentType>) => ({
  type: types.SET_COMMENTS,
  comments
} as const);
export const createComment = (comment: CommentType) => ({
  type: types.CREATE_COMMENT,
  comment
} as const);
export const deleteComment = (commentId: number) => ({
  type: types.DELETE_COMMENT,
  commentId
} as const);
