import { store } from "../redux/store";
import { instance } from "./api";
import { CommentType, CreateCommentResponseType, DeleteResponseType } from "./types";

export const commentsAPI = {
  getComments() {
    return instance.get<Array<CommentType & { userId: number }>>("/comments", {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  createComment(prayerId: number, body: string) {
    return instance.post<CreateCommentResponseType & { userId: number }>(`/prayers/${prayerId}/comments`, { body }, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  deleteComment(commentId: number) {
    return instance.delete<DeleteResponseType>(`/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  }
};
