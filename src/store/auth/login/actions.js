import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOGIN_REQUEST} from './actionTypes';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});
export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

export const logout = () => ({
  type: LOGOUT,
});