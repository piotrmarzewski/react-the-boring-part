import thunkMiddleware from "redux-thunk";
import * as reducers   from "app/reducers";
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";

const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(combineReducers(reducers));

export default store;
