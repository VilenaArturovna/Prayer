import { types } from "../types";
import {
  ColumnType,
  CommentType,
  PrayerResponseType,
  PrayerType,
  RequestStatusType,
  SignInResponseType
} from "../../api/types";

export const setIsLoggedInAC = (value: boolean) => ({ type: types.SET_IS_LOGGED_IN, value } as const);
export const setAppStatusAC = (status: RequestStatusType) => ({ type: types.APP_SET_STATUS, status } as const);
export const signInAC = (data: SignInResponseType) => ({
  type: types.SIGN_IN_UP,
  data
} as const);
export const setTokenAC = (token: string) => ({
  type: types.SET_TOKEN,
  token
} as const);
export const logOutAC = () => ({ type: types.LOG_OUT } as const);
export type authActionsType =
  ReturnType<typeof setIsLoggedInAC> |
  ReturnType<typeof setAppStatusAC> |
  ReturnType<typeof signInAC> |
  ReturnType<typeof setTokenAC> |
  ReturnType<typeof logOutAC>

export const getColumnById = (column: ColumnType) => ({
  type: types.GET_COLUMN,
  column
} as const);
export const setColumns = (columns: Array<ColumnType>) => ({
  type: types.SET_COLUMNS,
  columns
} as const);
export const createColumn = (column: ColumnType & { user: number }) => ({
  type: types.CREATE_COLUMN,
  column
} as const);
export const updateColumn = (columnId: number, title: string, description: string) => ({
  type: types.UPDATE_COLUMN,
  columnId,
  title,
  description
} as const);
export const deleteColumn = (columnId: number) => ({
  type: types.DELETE_COLUMN,
  columnId
} as const);
export type columnsActionsType =
  ReturnType<typeof setColumns> |
  ReturnType<typeof createColumn> |
  ReturnType<typeof deleteColumn> |
  ReturnType<typeof updateColumn>

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
export type commentsActionType =
  ReturnType<typeof setComments> |
  ReturnType<typeof createComment> |
  ReturnType<typeof deleteComment>

export const getPrayerById = (prayer: PrayerType) => ({
  type: types.GET_PRAYER,
  prayer
} as const);

export const setPrayers = (prayers: Array<PrayerResponseType>) => ({
  type: types.SET_PRAYERS,
  prayers
} as const);
export const createPrayer = (prayer: PrayerType) => ({
  type: types.CREATE_PRAYER,
  prayer
} as const);
export const deletePrayer = (id: number) => ({
  type: types.DELETE_PRAYER,
  id
} as const);
export const updatePrayer = (title: string, checked: boolean, prayerId: number) => ({
  type: types.UPDATE_PRAYER,
  title,
  checked,
  prayerId
} as const);
export type prayersActionsType =
  ReturnType<typeof setPrayers> |
  ReturnType<typeof createPrayer> |
  ReturnType<typeof updatePrayer> |
  ReturnType<typeof deletePrayer>
