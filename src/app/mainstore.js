import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./combinedreducers.js";
import { apiSlice } from "./middleware/apimiddleware.js";
import { setupListeners } from "@reduxjs/toolkit/query";

const AppStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(AppStore.dispatch);

export { AppStore };
