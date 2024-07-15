import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { apiService } from './middleware/apimiddleware';
import { paginationSlice } from './slices/paginationSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  pagination: paginationSlice.reducer,
  [apiService.reducerPath]: apiService.reducer,
});

export default rootReducer;
