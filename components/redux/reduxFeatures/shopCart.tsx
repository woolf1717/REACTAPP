import { createSlice } from "@reduxjs/toolkit";

const initialStateValue: any = [];

const shopCart = createSlice({
  name: "shopCart",
  initialState: { value: initialStateValue },
  reducers: {
    addToCart: (state, action) => {
      //tu mam numer indexu
      if (
        state.value.findIndex((el: any) => el.name === action.payload.name) ===
        -1
      ) {
        state.value.push(action.payload);
      } else {
        state.value[
          state.value.findIndex((el: any) => el.name === action.payload.name)
        ].counter += action.payload.counter;
      }
    },
    removeFromCart: (state, action) => {
      if (
        state.value[
          state.value.findIndex((el: any) => el.name === action.payload.name)
        ].counter > 0
      ) {
        state.value[
          state.value.findIndex((el: any) => el.name === action.payload.name)
        ].counter -= 1;
      }
    },
    removeProductFromCart: (state, action) => {
      if (
        state.value.findIndex((el: any) => el.name === action.payload.name) !==
        -1
      ) {
        state.value.splice(
          state.value.findIndex((el: any) => el.name === action.payload.name),
          state.value.findIndex((el: any) => el.name === action.payload.name) +
            1
        );
      }
    },
    removeAllFromCart: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllFromCart,
  removeProductFromCart,
} = shopCart.actions;

export default shopCart.reducer;
