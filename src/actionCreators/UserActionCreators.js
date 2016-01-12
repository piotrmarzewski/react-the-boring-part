import axios from "axios";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "app/actionTypes/UserActionTypes";

function getUsersRequest() {
  return {
    type: GET_USERS_REQUEST,
    payload: {
      loading: true,
    },
  };
}

function getUsersSuccess({ data }) {
  return {
    type: GET_USERS_SUCCESS,
    payload: data,
  };
}

function getUsersFailure({ data }) {
  return {
    type: GET_USERS_FAILURE,
    payload: data,
    error: true,
  };
}

export function getUsers() {
  return dispatch => {
    dispatch(getUsersRequest());
    return axios.get("https://api.github.com/users")
      .then(response => { dispatch(getUsersSuccess(response)) })
      .catch(response => { dispatch(getUsersFailure(response)) });
  };
}

function getUserRequest() {
  return {
    type: GET_USER_REQUEST,
    payload: {
      loading: true,
    },
  };
}

function getUserSuccess({ data }) {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
}

function getUserFailure({ data }) {
  return {
    type: GET_USER_FAILURE,
    payload: data,
    error: true,
  };
}

export function getUser(login) {
  return dispatch => {
    dispatch(getUserRequest());
    return axios.get(`https://api.github.com/users/${login}`)
      .then(response => { dispatch(getUserSuccess(response)) })
      .catch(response => { dispatch(getUserFailure(response)) });
  };
}
