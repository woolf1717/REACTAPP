import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  value: number;
}

const initialState: PopupState = { value: 0 };

const shopPopup = createSlice({
  name: "popup",
  initialState,
  reducers: {
    flagPopupOn: (state, action) => {
      state.value = action.payload;
    },
    flagPopupOff: (state) => {
      state.value = 0;
    },
  },
});

export const { flagPopupOn, flagPopupOff } = shopPopup.actions;

export default shopPopup.reducer;
