import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "counter",
  initialState: {
    value: [],
  },
  reducers: {
    updateTasks: (state, action) => {
      state.value = [...state, action.payload];
    },
  },
});

export const { updateTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
