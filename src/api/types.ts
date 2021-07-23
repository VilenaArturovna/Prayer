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
export type ColumnType = {
  title: string
  description: string
  id: number
}
export type SignUpResponseType = SignInResponseType & {
  password: string
  columns: Array<ColumnType>
}
export type DeleteResponseType = {
  raw: []
  affected: number
}
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
export type CommentType = {
  id: number
  body: string
  created: string
  prayerId?: number
}
export type CreateCommentResponseType = CommentType & {
  card: PrayerResponseType
  user: SignInResponseType
}
export type RequestStatusType = "loading" | "succeeded"
