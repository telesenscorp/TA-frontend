import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, Put } from "../server";
const emptyCart: States.EmptyCart = {
  id: "",
  clientName: "",
  clientEmail: "",
  clientPhone: "",
  clientSocialMediaID: "",
  orderStatus: "Abandoned",
  data: "",
  url: "",
  signature: "",
};
const initialState: States.cart = {
  loading: false,
  requester: "",
  cart: emptyCart,
};
export const createCart = createAsyncThunk("shop/createCart", async () => {
  return await Post<{ id: string }>("createCart", {
    clientName: "",
    clientEmail: "",
    clientPhone: "",
  });
});
export const updateCart = createAsyncThunk(
  "shop/updateCart",
  async (v: States.CartInfo) => {
    const { id, clientEmail, clientName, clientPhone, clientSocialMediaID } = v;
    await Put<{ id: string }>(["cartDetailsId", id], {
      clientEmail,
      clientName,
      clientPhone,
      clientSocialMediaID,
    });
    return { clientEmail, clientName, clientPhone, clientSocialMediaID };
  }
);
export const changeCartStatus = createAsyncThunk(
  "shop/changeCartStatus",
  async ({ id, orderStatus }: States.CartInfo) => {
    await Put<{ id: string }>(["cartDetailsId", id], { orderStatus });
    return orderStatus;
  }
);
export const selectCartProduct = createAsyncThunk(
  "shop/selectCartProduct",
  async ({
    type,
    productId,
  }: {
    type: [ServerAPI.UCR, string | number];
    productId: number;
  }) => {
    return await Put<States.CartData>(
      type,
      { productId },
      async () => {}
    );
  }
);
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.cart = { ...emptyCart };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCart.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload !== null) state.cart.id = payload.id;
      })
      .addCase(createCart.pending, (state) => {
        state.loading = true;
        state.requester = "createCart";
      })
      .addCase(updateCart.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cart.clientEmail = payload.clientEmail;
        state.cart.clientName = payload.clientName;
        state.cart.clientPhone = payload.clientPhone;
        state.cart.clientSocialMediaID = payload.clientSocialMediaID;
      })
      .addCase(updateCart.pending, (state) => {
        state.loading = true;
        state.requester = "updateCart";
      })
      .addCase(changeCartStatus.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cart.orderStatus = payload;
      })
      .addCase(changeCartStatus.pending, (state) => {
        state.loading = true;
        state.requester = "changeCartStatus";
      })
      .addCase(selectCartProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload !== null) {
          state.cart = { ...emptyCart };
          setTimeout(() => {
            window.location.href = payload.url;
          }, 500);
        }
      })
      .addCase(selectCartProduct.pending, (state) => {
        state.loading = true;
        state.requester = "selectCartProduct";
      });
  },
});
