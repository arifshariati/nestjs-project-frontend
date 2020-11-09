import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productDetails: null,
  },
  reducers: {
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});

export const { setProductDetails } = productsSlice.actions;
export const getProductDetails = (state) => state.products.productDetails;

export default productsSlice.reducer;
