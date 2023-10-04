  import { createSlice } from "@reduxjs/toolkit";
  import { products } from "../../service/Data.json"

  const persistedState = localStorage.getItem("__Products__");
  const PRODUCTS_DEFAULT = persistedState ? JSON.parse(persistedState).products : products;

  export const productsSlice = createSlice({
    name: "products",
    initialState: {
      products: PRODUCTS_DEFAULT,
    },  
    reducers: {
      addProduct: (state, action) => {
        const newProduct = action.payload;

        // Asigna un nuevo ID al producto
        newProduct.id = state.products.length + 1;
  
        // Agrega el producto al estado de Redux
        state.products.push(newProduct);
  
        // Actualiza el LocalStorage con los productos actualizados
        localStorage.setItem("__Products__", JSON.stringify({ products: state.products }));
      },
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

  export const {addProduct, showAllProducts, deleteProduct, toggleProductVisibility } = productsSlice.actions;