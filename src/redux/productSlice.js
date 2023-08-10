import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productStatus: "idle",
  reviewStatus: "idle",
  product: {},
  products: [],
  reviews: [],
};

export const getAllProducts = createAsyncThunk("post/getAllProducts", async () => {
  const { data } = await axios.get("/api/v1/products/all");
  return data;
});


export const productSlice = createSlice({
  name: "product",

  initialState,

  reducers: {},

  extraReducers: {
    [getAllProducts.pending]: (state, action) => {
      state.postStatus = "loading";
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.postStatus = "success";
      state.posts = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.postStatus = "failed";
    },
  },
});

export default productSlice.reducer;
// export const { updateLike } = postSlice.actions;
