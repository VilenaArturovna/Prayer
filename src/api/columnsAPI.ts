import { store } from "../redux/store";
import { instance } from "./api";
import { ColumnType, DeleteResponseType } from "./types";

export const columnsAPI = {
  getColumns() {
    return instance.get<Array<ColumnType & { userId: number }>>("/columns", {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  createColumn(title: string, description: string) {
    return instance.post<ColumnType & { user: number }>("/columns", { title, description }, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  getColumnById(columnId: number) {
    return instance.get<ColumnType & { userId: number }>(`/columns/${columnId}`, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  deleteColumn(columnId: number) {
    return instance.delete<DeleteResponseType>(`/columns/${columnId}`, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  updateColumn(columnId: number, title: string, description: string) {
    return instance.put<ColumnType & { userId: number }>(`/columns/${columnId}`, { title, description }, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  }
};
