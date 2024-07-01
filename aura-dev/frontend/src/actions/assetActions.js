 // src/actions/assetActions.js
import axios from 'axios';

export const uploadAsset = (assetData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/assets/upload', assetData);
    dispatch({ type: 'UPLOAD_ASSET_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'UPLOAD_ASSET_FAIL', payload: error.response.data });
  }
};

export const fetchAssets = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/assets');
    dispatch({ type: 'FETCH_ASSETS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_ASSETS_FAIL', payload: error.response.data });
  }
};
 