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
    radioData: (state, action: PayloadAction<number>) => {
      state.radio = action.payload;
    },
    commentData: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
  },
});

export const { commentData, radioData } = componentsSlice.actions;

export default componentsSlice.reducer;
