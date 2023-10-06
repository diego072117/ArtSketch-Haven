import { useDispatch } from "react-redux";
import { showAllProducts, toggleProductVisibility, deleteProduct, addProduct, tellProduct } from "../store/products/slice";

export const useProductsActions = () => {
  const dispatch = useDispatch();

  const newProduct = (product) => {
    dispatch(addProduct(product));
  };


  const showAll = () => {
    dispatch(showAllProducts());
  };

  
  const removeProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const updateProduct = (updatedProduct) => {
    dispatch(tellProduct(updatedProduct));
  };


  const toggleVisibility = (productId) => {
    dispatch(toggleProductVisibility(productId));
  };

  return { newProduct, showAll, toggleVisibility, removeProduct, updateProduct };
};
  