import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./ordersSlice";
import holdingsSlice from "./holdingSlice";

 export const store = configureStore(
  {
    reducer: {
      order: orderSlice.reducer,
      holdings: holdingsSlice.reducer
    }
  }
)