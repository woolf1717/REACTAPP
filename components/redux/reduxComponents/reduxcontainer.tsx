import React from "react";

import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../reduxFeatures/menuSlide";
import popupReducer from "../reduxFeatures/shopPopup";
import { Provider } from "react-redux";
import shopCartReducer from "../reduxFeatures/shopCart";
import themeReducer from "../reduxFeatures/theme";
import userReducer from "../reduxFeatures/user";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    menu: menuReducer,
    popup: popupReducer,
    shopCart: shopCartReducer,
  },
});

type Props = {
  children: React.ReactNode;
};

const ReduxContainer = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxContainer;
