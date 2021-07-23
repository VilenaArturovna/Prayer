import { types } from "../types";
import { ColumnType } from "../../api/types";
import { columnsActionsType } from "./actionCreators";

const initialState: Array<ColumnType> = [];

export const columnsReducer = (state = initialState, action: columnsActionsType) => {
  switch (action.type) {
    case types.SET_COLUMNS:
      return action.columns.map(column => ({ ...column }));
    case types.CREATE_COLUMN:
      return [...state, {
        title: action.column.title,
        description: action.column.description,
        id: action.column.id
      }];
    case types.UPDATE_COLUMN:
      const copyState = state.map(column => ({ ...column }));
      const column = copyState.find(column => column.id === action.columnId);
      if (column) {
        column.title = action.title;
        column.description = action.description;
      }
      return copyState;
    case types.DELETE_COLUMN:
      return state.filter(column => column.id !== action.columnId);
    default:
      return state;
  }
};

