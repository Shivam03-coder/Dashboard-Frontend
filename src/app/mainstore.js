import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./combinedreducers.js";

const AppStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export { AppStore };
