import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    postModal: false,
    authModal: false,
  },
  reducers: {
    setPostModal: (state, action) => {
      state.postModal = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { setPostModal } = modalSlice.actions;
