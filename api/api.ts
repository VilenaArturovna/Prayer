import axios from "axios";

const instance = axios.create({
  baseURL: "https://prayer.herokuapp.com",
  headers: {
    token: "Authorization: Bearer 24fc5746e07dcb81cd563a8aea1c33c03ff78d3bfdd4db6801ab2882bd9be120"
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
  description: string | null
  id?: number
}

export const columnsAPI = {
  getColumns() {
    return instance.get<Array<ColumnType> & { userId: number }>("/columns");
  },
  createColumn(data: ColumnType) {
    return instance.post<ColumnType & { user: number }>("/columns", data);
  },
  getColumnById(columnId: number) {
    return instance.get<ColumnType & { userId: number }>(`/columns/${columnId}`);
  }
};


//prayers
export type PrayerType = {
  title: string
  description: string | null
  checked: boolean
  columnId: number
}
type CreatePrayerResponseType = PrayerType & {
  column: ColumnType & { userId: number }
  id: number
}
type GetPrayerResponseType = PrayerType & {
  commentsIds: Array<{ commentId: number }>
  id: number
}
type DeleteResponseType = {
  raw: []
  affected: number
}
export const prayersAPI = {
  createPrayer(data: PrayerType) {
    return instance.post<CreatePrayerResponseType>(`/columns/${data.columnId}/prayers`, {
      title: data.title,
      description: data.description,
      checked: data.checked
    });
  },
  getPrayers() {
    return instance.get<Array<GetPrayerResponseType>>("/prayers");
  },
  getPrayerById(prayerId: number) {
    return instance.get<GetPrayerResponseType>(`/prayers/${prayerId}`);
  },
  deletePrayer(prayerId: number) {
    return instance.delete<DeleteResponseType>(`/prayers/${prayerId}`);
  }
};


//comments
export type CommentType = {
  id: number
  body: string
  created: string
  prayerId: number
  userId: number
}
type CreateCommentResponseType = CommentType & {
  card: GetPrayerResponseType
  user: SignInResponseType
}
export const commentsAPI = {
  createComment(prayerId: number, body: string) {
    return instance.post<CreateCommentResponseType>(`/prayers/${prayerId}/comments`, { body });
  },
  getComments() {
    return instance.get<Array<CommentType>>("/comments");
  },
  deleteComment(commentId: number) {
    return instance.delete<DeleteResponseType>(`/comments/${commentId}`);
  }
};
