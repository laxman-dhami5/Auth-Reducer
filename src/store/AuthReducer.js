import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  token: null, // To store the bearer token
  userId: null, // To store the user ID
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token; // Store the token from the payload
      state.userId = action.payload.userId; // Store the user ID from the payload
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null; // Clear the token on logout
      state.userId = null; // Clear the user ID on logout
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
