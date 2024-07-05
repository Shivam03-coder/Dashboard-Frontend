import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './combinedreducers'; 
import { apiService } from './middleware/apimiddleware'; 
import { setupListeners } from '@reduxjs/toolkit/query';

const AppStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

setupListeners(AppStore.dispatch);

export { AppStore };
