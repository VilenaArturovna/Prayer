import { types } from "../types";
import { CommentType } from "../../api/types";
import { commentsActionType } from "./actionCreators";

const initialState: Array<CommentType> = [];

export const commentsReducer = (state = initialState, action: commentsActionType) => {
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
