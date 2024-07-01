// src/reducers/authReducer.js
const initialState = {
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          loading: false,
          error: null,
        };
      case 'LOGIN_FAIL':
      case 'REGISTER_FAIL':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
 ddd  