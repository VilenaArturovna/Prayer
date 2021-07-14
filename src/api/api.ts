import axios from "axios";

const instance = axios.create({
  baseURL: "https://prayer.herokuapp.com",
  headers: {
    Authorization: "Bearer 24fc5746e07dcb81cd563a8aea1c33c03ff78d3bfdd4db6801ab2882bd9be120",
    accept: "*/*"
  }
});

//authorization
export type SignInParamsType = {
  email: string
  password: string
}
export type SignUpParamsType = SignInParamsType & { name: string }
type SignInResponseType = {
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
    return instance.get<Array<ColumnType & { userId: number }>>("/columns");
  },
  createColumn(title: string, description: string) {
    return instance.post<ColumnType & { user: number }>("/columns", { title, description });
  },
  getColumnById(columnId: number) {
    return instance.get<ColumnType & { userId: number }>(`/columns/${columnId}`);
  },
  deleteColumn(columnId: number) {
    return instance.delete<DeleteResponseType>(`/columns/${columnId}`);
  },
  updateColumn(columnId: number, title: string, description: string) {
    return instance.put<ColumnType & { userId: number }>(`/columns/${columnId}`, { title, description });
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
    });
  },
  getPrayers() {
    return instance.get<Array<PrayerResponseType>>("/prayers");
  },
  getPrayerById(prayerId: number) {
    return instance.get<PrayerResponseType>(`/prayers/${prayerId}`);
  },
  deletePrayer(prayerId: number) {
    return instance.delete<DeleteResponseType>(`/prayers/${prayerId}`);
  },
  updatePrayer(title: string, checked: boolean, prayerId: number) {
    return instance.put<PrayerResponseType>(`/prayers/${prayerId}`, {
      title,
      checked
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
    return instance.get<Array<CommentType & {userId: number}>>("/comments");
  },
  createComment(prayerId: number, body: string) {
    return instance.post<CreateCommentResponseType & {userId: number}>(`/prayers/${prayerId}/comments`, { body });
  },
  deleteComment(commentId: number) {
    return instance.delete<DeleteResponseType>(`/comments/${commentId}`);
  }
};
