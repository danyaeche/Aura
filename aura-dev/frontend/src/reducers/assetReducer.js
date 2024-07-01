// src/reducers/assetReducer.js
const initialState = {
    assets: [],
    loading: true,
    error: null,
  };
  
  const assetReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPLOAD_ASSET_SUCCESS':
      case 'FETCH_ASSETS_SUCCESS':
        return {
          ...state,
          assets: action.payload,
          loading: false,
          error: null,
        };
      case 'UPLOAD_ASSET_FAIL':
      case 'FETCH_ASSETS_FAIL':
        return {
          ...state,
          assets: [],
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default assetReducer;
  