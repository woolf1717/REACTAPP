import { createSlice } from "@reduxjs/toolkit";
interface MenuState {
  value: boolean;
}
const initialState: MenuState = { value: false };

const menuSlice = createSlice({
  name: "menu",
  initialState,
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
