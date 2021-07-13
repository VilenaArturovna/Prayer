import { ColumnType } from "../../api/api";
import { types } from "../types";

const initialState: Array<ColumnType> = [
  { id: 1, title: "YoYoYo", description: "" }
];
type ActionsType =
  ReturnType<typeof setColumns> |
  ReturnType<typeof createColumn> |
  ReturnType<typeof deleteColumn> |
  ReturnType<typeof updateColumn>

export const columnsReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case types.SET_COLUMNS: {
      return action.columns.map(column => ({ ...column }));
    }
    case types.CREATE_COLUMN: {
      return [...state, { title: action.title, description: action.description }];
    }
    case types.UPDATE_COLUMN: {
      const copyState = state.map(column => ({ ...column }));
      const column = copyState.find(column => column.id === action.columnId);
      if (column) {
        column.title = action.title;
        column.description = action.description;
      }
      return copyState;
    }
    case types.DELETE_COLUMN: {
      return state.map(column => ({ ...column })).filter(column => column.id !== action.columnId);
    }

    default:
      return state;
  }
};

const setColumns = (columns: Array<ColumnType>) => ({
  type: types.SET_COLUMNS, columns
} as const);
const createColumn = (title: string, description: string) => ({
  type: types.CREATE_COLUMN,
  title,
  description
} as const);
const updateColumn = (columnId: number, title: string, description: string) => ({
  type: types.UPDATE_COLUMN,
  columnId,
  title,
  description
} as const);
const deleteColumn = (columnId: number) => ({
  type: types.DELETE_COLUMN,
  columnId
} as const);
const getColumnById = (columnId: number) => ({
  type: types.GET_COLUMN,
  columnId
} as const)
