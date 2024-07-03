import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/stores/userSlice";
import tasksSlice from "@/stores/tasksSlice";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "tasks",
  storage,
};

// combiniing the state into a single store
const persistedReducer = persistCombineReducers(persistConfig, {
  user: userSlice,
  tasks: tasksSlice,
});

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
