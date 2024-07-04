import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.js";
import { apiSlice } from "./middleware/apimiddleware.js";

const rootReducer = combineReducers({
  user: userSlice,
  [apiSlice.reducer]: apiSlice.reducer,
});

export default rootReducer;
