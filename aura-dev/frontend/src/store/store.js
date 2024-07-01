// src/store/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from '../reducers/authReducer';
import assetReducer from '../reducers/assetReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  assets: assetReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
