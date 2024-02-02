import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = localStorage.getItem("token");

const initialState = {
  isAuthenticated: !!user?.token,
  token: user?.token || null,
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    entity: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    userLoggedIn: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    userLoggedOut: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { userLoggedIn, userLoggedOut } = userSlice.actions;

export default userSlice.reducer;
