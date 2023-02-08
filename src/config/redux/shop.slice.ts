import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Get } from "../server";
const initialState: States.shop = {
  settings: {
    version: 3,
    action: "pay",
    language: "ua",
    currency: "UAH",
    result_url: "",
    server_url: "",
  },
  products: [],
  carts: [],
  receipts: [],
  timestamp: 0,
};
export const fetchProducts = createAsyncThunk("shop/fetchProducts", async () => {
  return await Get<States.ShopProduct[]>("allProducts");
});
export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    hydrateSettings(state, { payload }) {
      state.settings = payload;
    },
    hydrateProducts(state, { payload }) {
      state.products = payload;
      state.timestamp = Date.now();
    },
    addProducts(state, { payload }) {
      state.products.push(payload);
      state.timestamp = Date.now();
    },
    hydrateCarts(state, { payload }) {
      state.carts = payload;
      state.timestamp = Date.now();
    },
    hydrateReceipts(state, { payload }) {
      state.receipts = payload;
      state.timestamp = Date.now();
    },
    hydrateShop(state, { payload }: PayloadAction<Gen.O>) {
      Object.entries(payload).forEach(([key, val]) => {
        state[key as States.shopKeys] = val;
      });
      state.timestamp = Date.now();
    },
    clear(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      if (payload !== null) state.products = payload;
    });
  },
});
