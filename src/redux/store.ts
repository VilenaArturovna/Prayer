import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./reducers/auth-reducer";
import { columnsReducer } from "./reducers/columns-reducer";
import { commentsReducer } from "./reducers/comments-reducer";
import { prayersReducer } from "./reducers/prayers-reducer";
import logger from "redux-logger";
import { columnReducer } from "./reducers/column-reducer";
import { sagas } from "./sagas/sagas";
import { prayerReducer } from "./reducers/prayer-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  columns: columnsReducer,
  column: columnReducer,
  prayers: prayersReducer,
  prayer: prayerReducer,
  comments: commentsReducer
});
export type RootStateType = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(sagas);
