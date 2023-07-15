import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { username: "", password:"", email:"", phonenumber:"", gender: "", birthmonth: "", birthday: "", create_time:"", user_type:"", logged: false};

const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      state.value.logged = true
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
