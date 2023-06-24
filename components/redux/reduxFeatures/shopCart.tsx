import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [{ name: "test", counter: 0 }];

const shopCart = createSlice({
  name: "shopCart",
  initialState: { value: initialStateValue },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },

    // removeFromCart: (state) => {
    //   state.value = state.value - action.payload;;
    // },
    removeAllFromCart: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const {
  addToCart,
  // removeFromCart,
  removeAllFromCart,
} = shopCart.actions;

export default shopCart.reducer;
