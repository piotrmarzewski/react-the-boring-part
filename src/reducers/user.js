import {
  GET_USER_SUCCESS
} from "app/actionTypes/UserActionTypes";

export default function user(state = { loading: true }, action) {
  switch(action.type) {
    case GET_USER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
