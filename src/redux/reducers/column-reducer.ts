import { types } from "../types";
import { ColumnType } from "../../api/api";

const initialState: ColumnType = {
  title: "Hey",
  description: "",
  id: 1
};

export const columnReducer = (state: ColumnType = initialState, action: ReturnType<typeof getColumnById>) => {
  switch (action.type) {
    case types.GET_COLUMN:
      return {
        ...action.column
      };
    default:
      return state;
  }
};

export const getColumnById = (column: ColumnType) => ({
  type: types.GET_COLUMN,
  column
} as const);
