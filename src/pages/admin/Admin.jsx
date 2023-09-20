import { useSelector } from "react-redux";
import { useProductsActions } from "../../hooks/useProductsActions";
import { useEffect } from "react";
import { showAllProducts } from "../../store/products/slice"; // Asegúrate de importar showAllProducts desde el slice

export const Admin = () => {
  const products = useSelector((state) => state.products.products);
  //const visibleProducts = products.filter((product) => product.isVisible);
  const { removeProduct } = useProductsActions(); // No necesitas showAllProducts aquí

  useEffect(() => {
    // Llama a showAllProducts directamente desde el useEffect
    showAllProducts();
  }, [showAllProducts]);

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
                  <button onClick={() => removeProduct(product.id)}>
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
