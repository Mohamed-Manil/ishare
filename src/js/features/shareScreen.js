import { createSlice } from "@reduxjs/toolkit";

export const shareScreen = createSlice({
  name: "screen",
  initialState: {
    iSshared: false,
    loading: false,
    error: "",
  },
  reducers: {
    shareRequest: (state) => {
      (state.loading = true), (state.iSshared = false);
    },
    shareSuccess: (state) => {
      (state.loading = false), (state.iSshared = true);
    },
    shareError: (state, action) => {
      (state.loading = false),
        (state.iSshared = false),
        (state.error = action.payload.error);
    },
  },
});
