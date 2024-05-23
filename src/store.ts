import { configureStore } from "@reduxjs/toolkit";

import componentsReducer from "./reducers/dashboard";

export default configureStore({
  reducer: {
    data: componentsReducer,
  },
  devTools: true
});
