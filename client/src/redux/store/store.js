import authReducer from "./index";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: { auth: authReducer },
});
export default store;
