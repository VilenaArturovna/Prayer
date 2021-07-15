import axios from "axios";
import { store } from "../redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

let token = store.getState().auth.userData.token;
token = token || store.getState().auth.userData.token;
const instance = axios.create({
  baseURL: "https://prayer.herokuapp.com",
  headers: {
    Authorization: `Bearer ${token}`,
    accept: "*/*"
  }
});

//authorization
export type SignInParamsType = {
  email: string
  password: string
}
export type SignUpParamsType = SignInParamsType & { name: string }
export type SignInResponseType = {
  id: number
  email: string
  name: string
  token: string
}
type SignUpResponseType = SignInResponseType & {
  password: string
  columns: Array<ColumnType>
}

export const authAPI = {
  signUp(data: SignUpParamsType) {
    return axios.post<SignUpResponseType>("https://prayer.herokuapp.com/auth/sign-up", data);
  },
  signIn(data: SignInParamsType) {
    return instance.post<SignInResponseType>("/auth/sign-in", data);
  },
  setTokenToAsyncStorage(token: string) {
    return AsyncStorage.setItem("token", token);
  },
  setIsLoggedInToAsyncStorage(value: boolean) {
    return AsyncStorage.setItem("isLoggedIn", JSON.stringify(value));
  },
  logOut() {
    return AsyncStorage.clear();
  }
};


//columns
export type ColumnType = {
  title: string
  description: string
  id: number
}
type DeleteResponseType = {
  raw: []
  affected: number
}
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


//prayers
export type PrayerType = {
  title: string
  description: string | null
  checked: boolean
  columnId: number
  id: number
}

export type CreatePrayerResponseType = PrayerType & {
  column: ColumnType & { userId: number }
}
export type PrayerResponseType = PrayerType & {
  commentsIds: Array<{ commentId: number }>
}
export const prayersAPI = {
  createPrayer(
    title: string,
    description: string | null,
    checked: boolean,
    columnId: number
  ) {
    return instance.post<CreatePrayerResponseType>(`/columns/${columnId}/prayers`, {
      title,
      description,
      checked
    }, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  getPrayers() {
    return instance.get<Array<PrayerResponseType>>("/prayers", {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  getPrayerById(prayerId: number) {
    return instance.get<PrayerResponseType>(`/prayers/${prayerId}`, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  deletePrayer(prayerId: number) {
    return instance.delete<DeleteResponseType>(`/prayers/${prayerId}`, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  },
  updatePrayer(title: string, checked: boolean, prayerId: number) {
    return instance.put<PrayerResponseType>(`/prayers/${prayerId}`, {
      title,
      checked
    }, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.userData.token}`,
        accept: "*/*"
      }
    });
  }
};


//comments
export type CommentType = {
  id: number
  body: string
  created: string
  prayerId?: number

}
type CreateCommentResponseType = CommentType & {
  card: PrayerResponseType
  user: SignInResponseType
}
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
