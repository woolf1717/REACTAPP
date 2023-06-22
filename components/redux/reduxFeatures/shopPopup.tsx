import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

const shopPopup = createSlice({
  name: "popup",
  initialState: { value: initialStateValue },
  reducers: {
    flagPopupOn: (state, action) => {
      state.value = action.payload;
    },
    flagPopupOff: (state) => {
      state.value = "";
    },
  },
});

export const { flagPopupOn, flagPopupOff } = shopPopup.actions;

export default shopPopup.reducer;
