import { createSlice } from "@reduxjs/toolkit";
const initialState: States.events = {
  id: "",
  listener: "",
  active: false,
  read: false,
  value: null,
};
export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventsUpdate(state, { payload }) {
      Object.assign(state, payload);
    },
    eventsClear(state) {
      Object.assign(state, initialState);
    },
  },
});
