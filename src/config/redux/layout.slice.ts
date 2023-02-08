import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mobileAndTabletCheck } from "../../utils";
import { rawContent } from "../../utils/factories";
import { Get } from "../server";
const initialState: States.layout = {
  language: "en",
  content: {
    routes: [],
    pages: { Home: [] },
  },
  user: { ip: "", locale: "", location: "" },
  savedSection: {},
  savedPage: [],
  homeId: 0,
  loaded: false,
  screenWidth: window.innerWidth || document.documentElement.clientWidth,
  mails: [],
  isFull: false,
  isWide: false,
  isTablet: false,
  isMobile: false,
  mobileBrowser: false,
  widthType: "desktop",
  visible: false,
  hiddenHeader: false,
};
const s = [1536, 1200, 820, 480]; //steps
export const fetchData = createAsyncThunk("shop/createCart", async (locale) => {
  const res = await Get<ServerRes.content[]>(["contentId", "ac-" + locale]);
  return res ? { ...rawContent(res), language: locale } : null;
});
export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    update(state, { payload }) {
      Object.assign(state, payload);
    },
    updateLocale(state, { payload }) {
      state.user.locale = payload;
    },
    setScreen(state, { payload }: PayloadAction<{ sw: number }>) {
      const { sw } = payload;
      Object.assign(state, {
        isFull: sw > s[0],
        isWide: sw <= s[0] && sw > s[1],
        isTablet: sw <= s[1] && sw > s[3],
        isMobile: sw <= s[1],
        sideBarWidth: sw > s[0] ? 360 : sw > s[2] ? 120 : sw > s[3] ? 80 : 0,
        widthType:
          sw > s[0]
            ? "desktop"
            : sw > s[1]
            ? "laptop"
            : sw > s[3]
            ? "tablet"
            : "mobile",
        mobileBrowser: mobileAndTabletCheck(),
        screenWidth: sw,
      });
    },
    setDefault(state, { payload }: PayloadAction<States.Section>) {
      state.savedSection[payload.section] = payload;
    },
    clear(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      if (payload !== null) Object.assign(state, payload);
    });
  },
});
