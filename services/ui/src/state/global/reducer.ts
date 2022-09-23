import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IApp {
  webType: string;
}

interface IAppState {
  app: IApp | null;
}

const initialState: IAppState = {
  app: null,
};

export const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    resetApp: () => initialState,

    updateWebType: (state, action: PayloadAction<string>) => {
      state.app!.webType = action.payload;
    },
  },
});

export const { resetApp, updateWebType } = globalSlice.actions;

export default globalSlice.reducer;
