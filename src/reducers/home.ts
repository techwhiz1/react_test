import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface dataState {
  comment: string;
  radio: number;
}

const initialState: dataState = {
  comment: '',
  radio: 1,
};

export const componentsSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    radioValue: (state, action: PayloadAction<number>) => {
      state.radio = action.payload;
    },
    commentValue: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
  },
});

export const { commentValue, radioValue } = componentsSlice.actions;

export default componentsSlice.reducer;
