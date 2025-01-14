import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from "./reducers/TodoReducers"

const reducer = combineReducers({
  Todo:TodoReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
 composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
