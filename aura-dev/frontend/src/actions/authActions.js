// src/actions/authActions.js
import axios from 'axios';

export const login = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/login', credentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
  }
};
