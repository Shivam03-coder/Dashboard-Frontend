import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { apiService } from './middleware/apimiddleware';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  [apiService.reducerPath]: apiService.reducer,
});

export default rootReducer;
