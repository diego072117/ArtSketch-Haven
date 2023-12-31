import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../service/Data.json";
import Swal from "sweetalert2";

const persistedState = localStorage.getItem("__Products__");
const PRODUCTS_DEFAULT = persistedState
  ? JSON.parse(persistedState).products
  : products;

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: PRODUCTS_DEFAULT,
  },
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;

      // Asigna un nuevo ID al producto
      const lastProductId = state.products.length > 0 ? state.products[state.products.length - 1].id : 0;
      const id = lastProductId + 1;
      

      // newProduct.id = state.products.length + 1;

      // Agrega el producto al estado de Redux
      state.products.push({ id, ...newProduct });

      // Actualiza el LocalStorage con los productos actualizados
      localStorage.setItem(
        "__Products__",
        JSON.stringify({ products: state.products })
      );
    },
    showAllProducts: (state) => {
      state.products.forEach((product) => {
        product.isVisible = true;
      });
    },
    deleteProduct: (state, action) => {
      try {
        const productId = action.payload;
        state.products = state.products.filter(
          (product) => product.id !== productId
        );
        localStorage.setItem(
          "__Products__",
          JSON.stringify({ products: state.products })
        );
      } catch (error) {
        console.log(error);
      }
    },
    tellProduct: (state, action) => {
      const updatedProduct = action.payload;
      // Buscar el índice del producto a actualizar
      const index = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );

      if (index !== -1) {
        // Reemplazar el producto antiguo con el actualizado
        state.products[index] = updatedProduct;
        // Actualizar el LocalStorage con los productos actualizados
        localStorage.setItem(
          "__Products__",
          JSON.stringify({ products: state.products })
        );
        Swal.fire({
          icon: "success",
          title: "Actualizacion exitosa!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Actualizacion fallida!",
        });
      }
    },
    toggleProductVisibility: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (product) {
        product.isVisible = !product.isVisible; // Cambia la visibilidad al valor opuesto
      }
    },
  },
});

export default productsSlice.reducer;

export const {
  addProduct,
  showAllProducts,
  deleteProduct,
  toggleProductVisibility,
  tellProduct,
} = productsSlice.actions;
