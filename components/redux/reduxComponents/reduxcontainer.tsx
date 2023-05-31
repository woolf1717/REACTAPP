﻿import React from "react";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import themeReducer from "../reduxFeatures/theme";
import userReducer from "../reduxFeatures/user";
import menuReducer from "../reduxFeatures/menuSlide";
const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    menu: menuReducer,
  },
});

type Props = {
  children: React.ReactNode;
};

const ReduxContainer = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxContainer;