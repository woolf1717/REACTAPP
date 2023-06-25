import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
  { name: "Bag", counter: 5 },
  { name: "Shirt", counter: 2 },
  { name: "ShirtTwo", counter: 3 },
];

const shopCart = createSlice({
  name: "shopCart",
  initialState: { value: initialStateValue },
  reducers: {
    addToCart: (state, action) => {
      //tu mam numer indexu
      if (
        state.value.findIndex((el) => el.name === action.payload.name) === -1
      ) {
        state.value.push(action.payload);
      } else {
        state.value[
          state.value.findIndex((el) => el.name === action.payload.name)
        ].counter += action.payload.counter;
      }
    },
    removeFromCart: (state) => {
      state.value = initialStateValue;
    },
    removeAllFromCart: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { addToCart, removeFromCart, removeAllFromCart } =
  shopCart.actions;

export default shopCart.reducer;
