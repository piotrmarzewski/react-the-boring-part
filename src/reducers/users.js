import {
  GET_USERS_SUCCESS
} from "app/actionTypes/UserActionTypes";

export default function users(state = [], action) {
  switch(action.type) {
    case GET_USERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
