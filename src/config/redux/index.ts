import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  type AnyAction,
  type ThunkDispatch,
} from "@reduxjs/toolkit";
import { useSelector, type TypedUseSelectorHook } from "react-redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartSlice } from "./cart.slice";
import { eventsSlice } from "./events.slice";
import { layoutSlice } from "./layout.slice";
import { shopSlice } from "./shop.slice";
const persistConfig = {
  key: "academy-admin-3",
  storage,
  blacklist: ["events", "shop"],
};
export const combinedReducers = combineReducers({
  layout: layoutSlice.reducer,
  cart: cartSlice.reducer,
  events: eventsSlice.reducer,
  shop: shopSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, combinedReducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});
export default store;
export type RootState = ReturnType<typeof combinedReducers>;
export const actions = {
  shop: shopSlice.actions,
  cart: cartSlice.actions,
  layout: layoutSlice.actions,
  event: eventsSlice.actions,
};
export type TD = ThunkDispatch<RootState, any, AnyAction>;
export const storeSelector: TypedUseSelectorHook<RootState> = useSelector;
