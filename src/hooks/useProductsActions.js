import { useDispatch } from "react-redux";
import { showAllProducts, toggleProductVisibility, deleteProduct, addProduct } from "../store/products/slice";

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


  const toggleVisibility = (productId) => {
    dispatch(toggleProductVisibility(productId));
  };

  return { newProduct, showAll, toggleVisibility, removeProduct };
};
  