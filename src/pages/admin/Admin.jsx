import { useSelector } from "react-redux";
import { useProductsActions } from "../../hooks/useProductsActions";
import { useEffect } from "react";
import './Module.scss';

export const Admin = () => {
  const products = useSelector((state) => state.products.products);
  const { removeProduct, showAll } = useProductsActions();
  useEffect(() => {
    showAll()
  }, [showAll]);

  return (
    <>
      <div className="containter-table">
        <table className="table-products">
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
