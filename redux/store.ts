import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./reducers/auth-reducer";
import { authSaga } from "./sagas/auth-saga";
import { columnsReducer } from "./reducers/columns-reducer";
import { commentsReducer } from "./reducers/comments-reducer";
import { prayersReducer } from "./reducers/prayers-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  columns: columnsReducer,
  prayers: prayersReducer,
  comments: commentsReducer
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(authSaga);
