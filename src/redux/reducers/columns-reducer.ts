import { ColumnType } from "../../api/api";
import { types } from "../types";

const initialState: Array<ColumnType> = [];
type ActionsType =
  ReturnType<typeof setColumns> |
  ReturnType<typeof createColumn> |
  ReturnType<typeof deleteColumn> |
  ReturnType<typeof updateColumn>

export const columnsReducer = (state = initialState, action: ActionsType) => {
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
