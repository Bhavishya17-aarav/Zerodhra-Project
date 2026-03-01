import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHoldings = createAsyncThunk(
  "holdings/fetchHoldings",
  async () => {
    const res = await axios.get("http://localhost:3000/allholdings");
    return res.data;
  }
);

const holdingsSlice = createSlice({
  name: "holdings",
  initialState: {
    items: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHoldings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHoldings.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchHoldings.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default holdingsSlice;