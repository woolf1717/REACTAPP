import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  value: string;
}

const initialState: PopupState = { value: "" };

const shopPopup = createSlice({
  name: "popup",
  initialState,
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
