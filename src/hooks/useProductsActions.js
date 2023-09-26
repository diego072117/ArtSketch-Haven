import { useDispatch } from "react-redux";
import { showAllProducts, toggleProductVisibility, deleteProduct } from "../store/products/slice";

export const useProductsActions = () => {
  const dispatch = useDispatch();

  const showAll = () => {
    dispatch(showAllProducts());
  };

  
  const removeProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };


  const toggleVisibility = (productId) => {
    dispatch(toggleProductVisibility(productId));
  };

  return { showAll, toggleVisibility, removeProduct };
};
  