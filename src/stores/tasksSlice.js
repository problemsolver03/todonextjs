import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "list",
  initialState: {
    value: [],
  },
  reducers: {
    updateTasks: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const { updateTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
