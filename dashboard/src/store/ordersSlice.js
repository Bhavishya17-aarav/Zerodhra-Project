
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (orderData) => {
    const response = await axios.post(
      "http://localhost:3000/order",
      orderData,
      { withCredentials: true }   
    );
    return response.data;
  }
);


const orderSlice = createSlice({
  name: "order",
  initialState: {
   isOpen: false,
   selectedStock: null,
   orderType: null,
   loading: false,
  },
  reducers: {
     openDialog: (state, action) => {
      state.isOpen = true;
      state.selectedStock = action.payload.stock;
      state.orderType = action.payload.type
    },

    closeDialog: (state) => {
      state.isOpen = false;
      state.selectedStock = null;
      state.orderType = null
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(placeOrder.fulfilled, (state) => {
        state.loading = false;
        state.isOpen = false;
      })
      .addCase(placeOrder.rejected, (state) => {
        state.loading = false;
      });
  },

})

export const orderActions = orderSlice.actions;
export default orderSlice;
