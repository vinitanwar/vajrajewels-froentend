import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; 
import user from "./userSlice"
import Layout from "./layoutSlice"
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user,
    layout:Layout
  },
});

export default store;
