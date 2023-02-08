import { createSlice } from "@reduxjs/toolkit";
const initialState: States.auth = {
  id: "",
  username: "",
  email: "",
  role: "",
  accessToken: "",
  refreshToken: "",
  gallery: [],
  posts: [],
  mails: [],
  logged: false,
  apiNotification: false,
  toggleToEdit: true,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    update(state, { payload }) {
      Object.assign(state, payload);
    },
    clear(state) {
      Object.assign(state, initialState);
    },
    toggleToEdit(state) {
      state.toggleToEdit = !state.toggleToEdit;
    },
    toggleApiNotification(state) {
      state.apiNotification = !state.apiNotification;
    },
  },
});
