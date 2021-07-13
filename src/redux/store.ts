import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./reducers/auth-reducer";
import { columnsReducer } from "./reducers/columns-reducer";
import { commentsReducer } from "./reducers/comments-reducer";
import { prayersReducer } from "./reducers/prayers-reducer";
import { columnsSaga } from "./sagas/columns-saga";

const rootReducer = combineReducers({
  auth: authReducer,
  columns: columnsReducer,
  prayers: prayersReducer,
  comments: commentsReducer
});
export type RootStateType = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(columnsSaga);
