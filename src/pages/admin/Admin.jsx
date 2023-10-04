import { useSelector } from "react-redux";
import { useProductsActions } from "../../hooks/useProductsActions";
import { useEffect } from "react";
import "./Module.scss";

export const Admin = () => {
  const products = useSelector((state) => state.products.products);
  const { newProduct, removeProduct, showAll } = useProductsActions();
  useEffect(() => {
    showAll();
  }, [showAll]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const price = formData.get("price");
    const img = formData.get("img");
    const description = formData.get("description");

    // Asegúrate de que name, price, img y description no sean null o undefined
    if (name && price && img && description) {
      const product = {
        name: name.toString(),
        price: price.toString(),
        img: img.toString(),
        description: description.toString(),
      };

      // Llama a la función para agregar el producto (ajusta el nombre según tu implementación)
      newProduct(product);

      // Cierra el modal (ajusta el nombre según tu implementación)
      //onCloseModal();
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="price" placeholder="price" />
          <input type="text" name="img" placeholder="img" />
          <input type="text" name="description" placeholder="desc" />
          <button type="submit">New Product</button>
        </form>
      </div>
    </>
  );
};
