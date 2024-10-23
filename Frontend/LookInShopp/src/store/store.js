import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../store/auth-Slice/index";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;