  import { createSlice } from "@reduxjs/toolkit";
  import { drawings } from "../../service/Data.json"

  const PRODUCTS_DEFAULT = drawings

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

  export const { showAllProducts, toggleProductVisibility } = productsSlice.actions;