import { RootStateType } from "./store";
import { ColumnType } from "../api/types";

export const getAppStatus = (state: RootStateType) => state.auth.status;

export const getColumn = (state: RootStateType) => state.column

export const getColumnById = (state: RootStateType, id: number): ColumnType | undefined => state.columns.find(column => column.id === id)

export const getColumns = (state: RootStateType) => state.columns

export const getPrayersForColumn = (state: RootStateType, id: number) => state.prayers.filter(prayer => prayer.columnId === id)

export const getIsLoggedInStatus = (state: RootStateType) => state.auth.isLoggedIn

export const getPrayer = (state: RootStateType) => state.prayer

export const getCommentForPrayer = (state: RootStateType, id: number) => state.comments.filter(comment => comment.prayerId === id)


