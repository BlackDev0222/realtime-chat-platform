import { createSlice } from "@reduxjs/toolkit";

export const meInitialState = {
  data: null,
};

const meSlice = createSlice({
  name: "me",
  initialState: meInitialState,
  reducers: {
    setMe: (state, action) => {
      state.data = action.payload;
    },
    logout: () => {},
  },
});

export const meActions = meSlice.actions;

export default meSlice;
