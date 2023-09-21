  import { createSlice } from "@reduxjs/toolkit";
  import { products } from "../../service/Data.json"

  const persistedState = localStorage.getItem("__redux__state__");
  const PRODUCTS_DEFAULT = persistedState ? JSON.parse(persistedState).products : products;

  export const productsSlice = createSlice({
    name: "products",
    initialState: {
      products: PRODUCTS_DEFAULT,
    },  
    reducers: {
      showAllProducts: (state) => {
        state.products.forEach((product) => {
          product.isVisible = true;
        }); 
     
      },
      deleteProduct: (state, action) => {
        const productId = action.payload;
        state.products = state.products.filter((product) => product.id !== productId);
      },
      toggleProductVisibility: (state, action) => {
        const productId = action.payload;
        const product = state.products.find((product) => product.id === productId);
        if (product) {
          product.isVisible = !product.isVisible; // Cambia la visibilidad al valor opuesto
        }
      },
    },
  });

  export default productsSlice.reducer;

  export const { showAllProducts, deleteProduct, toggleProductVisibility } = productsSlice.actions;