import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import appApi from "./services/appApi";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";

// Combine your reducers
const reducer = combineReducers({
  user: userSlice,
  [appApi.reducerPath]: appApi.reducer,
});

// Configure persist reducer
const persistConfig = {
  key: "root",
  storage,
  blacklist: [appApi.reducerPath],
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Configure the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, appApi.middleware],
});

export default store;
