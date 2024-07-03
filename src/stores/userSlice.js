import { createSlice } from "@reduxjs/toolkit";

// slice to store and update the state of tasks
export const userSlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
  },
  reducers: {
    updateUser: (state, action) => {
      state.value = { ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
