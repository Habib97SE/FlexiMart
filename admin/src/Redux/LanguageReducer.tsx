import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LangState {
  i18LangStatus: string;
}

const initialState: LangState = {
  i18LangStatus: "en",
};

const LangReducer = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.i18LangStatus = action.payload;
    },
  },
});

export const { setLanguage } = LangReducer.actions;

export default LangReducer.reducer;
export const selectCab = (state: any) => state.language;
