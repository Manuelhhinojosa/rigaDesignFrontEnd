import { createSlice } from "@reduxjs/toolkit";

export const logicSlice = createSlice({
  name: "logicSlice",
  initialState: {
    showJewellery: false,
    showfirstImgSingleProd: true,
    showNavbar: false,
    showAllProducts: true,
    showAddProduct: false,
    showViewOrders: false,
  },
  reducers: {
    setShowJewelleryToTrue: (state, action) => {
      state.showJewellery = true;
    },

    setShowJewelleryTofalse: (state, action) => {
      state.showJewellery = false;
    },

    toggleShowfirstImgSingleProd: (state, action) => {
      state.showfirstImgSingleProd = !state.showfirstImgSingleProd;
    },

    toggleShowNavbar: (state, action) => {
      state.showNavbar = !state.showNavbar;
    },

    setShowNavbarToFalse: (state, action) => {
      state.showNavbar = false;
    },
    //
    setShowAllProducts: (state, action) => {
      state.showAllProducts = true;
      state.showAddProduct = false;
      state.showViewOrders = false;
    },

    setShowAddProduct: (state, action) => {
      state.showAllProducts = false;
      state.showAddProduct = true;
      state.showViewOrders = false;
    },

    setShowViewOrders: (state, action) => {
      state.showAllProducts = false;
      state.showAddProduct = false;
      state.showViewOrders = true;
    },
  },
});

export const {
  setShowJewelleryToTrue,
  setShowJewelleryTofalse,
  toggleShowfirstImgSingleProd,
  toggleShowNavbar,
  setShowNavbarToFalse,
  setShowAllProducts,
  setShowAddProduct,
  setShowViewOrders,
} = logicSlice.actions;

export default logicSlice.reducer;
