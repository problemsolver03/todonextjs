import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/stores/userSlice";
import tasksSlice from "@/stores/tasksSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "tasks",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice, tasksSlice);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
