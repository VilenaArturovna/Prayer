import { SignInParamsType, SignUpParamsType } from "../../api/types";

export type ActionSignUpType = {
  payload: SignUpParamsType
}
export type ActionSignInType = {
  payload: SignInParamsType
}
export type CreateColumnActionType = {
  payload: {
    title: string
    description: string
  }
}
export type ColumnIdActionType = {
  payload: {
    columnId: number
  }
}
export type UpdateColumnActionType = {
  payload: {
    columnId: number
    title: string
    description: string
  }
}
export type CreateCommentActionType = {
  payload: {
    prayerId: number
    body: string
  }
}
export type CommentIdActionType = {
  payload: {
    commentId: number
  }
}
export type CreatePrayerActionType = {
  title: string
  description: string
  checked: boolean
  columnId: number
}
