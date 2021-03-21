/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./Slice";

export default configureStore({
  reducer: {
    login:loginSlice.reducer
  }
})