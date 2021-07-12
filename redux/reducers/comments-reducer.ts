import { CommentType } from "../../api/api";

const initialState: Array<CommentType> = [];

export const commentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
