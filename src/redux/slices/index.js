import meSlice, { meActions, meInitialState } from "./me";

export const slices = { me: meSlice.reducer };

export const actions = { me: meActions };

export const initialState = { me: meInitialState };
