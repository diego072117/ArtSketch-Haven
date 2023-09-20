import { useSelector, useDispatch } from "react-redux";
import { showAllProducts } from "../../store/products/slice";
import { useCallback, useEffect } from "react";
import { toggleProductVisibility } from "../../store/products/slice";

export const Admin = () => {
  const products = useSelector((state) => state.products.products);
  const visibleProducts = products.filter((product) => product.isVisible);
  const dispatch = useDispatch();

  // Función para manejar el clic en el botón y cambiar la visibilidad del producto
  const handleToggleVisibility = (productId) => {
    dispatch(toggleProductVisibility(productId));
  };

  const toggleVisibilityCallback = useCallback(handleToggleVisibility, []);

  useEffect(() => {
    dispatch(showAllProducts());
  }, [dispatch/*toggleVisibilityCallback*/]);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => handleToggleVisibility(product.id)}>
                    Agotado
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
