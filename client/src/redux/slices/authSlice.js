import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isauthenticated: false,
    user: null,
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isauthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setAuthenticated, setUser, setUserDetails, setRole } =
  authSlice.actions;


