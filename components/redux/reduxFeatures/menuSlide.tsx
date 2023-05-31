import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

const menuSlice = createSlice({
  name: "menu",
  initialState: { value: initialStateValue },
  reducers: {
    flagMenuOn: (state) => {
      state.value = true;
    },
    flagMenuOff: (state) => {
      state.value = false;
    },
  },
});

export const { flagMenuOn, flagMenuOff } = menuSlice.actions;

export default menuSlice.reducer;
