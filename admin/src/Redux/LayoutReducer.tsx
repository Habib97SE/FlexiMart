import { createSlice } from "@reduxjs/toolkit";

const LayoutSlice = createSlice({
  name: "layoutSlice",
  initialState: {
    sidebar: false,
    rightSidebar: false,
  },
  reducers: {
    setOpenCloseSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
    setRightSidebar: (state, action) => {
      state.rightSidebar = action.payload;
    }
  },
});
export const { setOpenCloseSidebar,setRightSidebar } = LayoutSlice.actions;
export default LayoutSlice.reducer;
