import { configureStore } from "@reduxjs/toolkit";

import componentsReducer from "./reducers/home";

export default configureStore({
  reducer: {
    data: componentsReducer,
  },
  devTools: true
});
