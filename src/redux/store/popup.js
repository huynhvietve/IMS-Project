import { createSlice } from "@reduxjs/toolkit";
const initiaPopupState = {
  showModal: false,
  data: null,
};
const popUpSlice = createSlice({
  name: "popup",
  initialState: initiaPopupState,
  reducers: {
    show(state) {
      state.showModal = true;
    },
    hide(state) {
      state.showModal = false;
    },
    setData(state, action) {
      state.data = action.payload;
    },
  },
});
export const popUpActions = popUpSlice.actions;
export default popUpSlice.reducer;
