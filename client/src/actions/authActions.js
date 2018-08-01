import axios from "axios";
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from '../utils/setAuthToken';

//REGISTER USER
export const registeruser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

// Login - get user token
export const loginuser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to local storage
      const { token } = res.data;
      // Set token in local storage
      localStorage.setItem('jwtToken', token);
      // Set token to auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwtDecode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}