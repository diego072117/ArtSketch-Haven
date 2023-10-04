import { useSelector } from "react-redux";
import { useProductsActions } from "../../hooks/useProductsActions";
import { useEffect, useState } from "react";
import "./Module.scss";
import { Modal } from "../../components/Modal/Modal";

export const Admin = () => {
  const [modalNewProduct, setModalNewProduct] = useState(false);

  const modalNewProductState = () => {
    setModalNewProduct(!modalNewProduct);
  };

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

      newProduct(product);

      setModalNewProduct(false);
    }
  };

  return (
    <>
      <div className="containter-table">
        <button className="button-new-product" onClick={modalNewProductState}>
          New user
        </button>
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

        <Modal
          isOpen={modalNewProduct}
          onClose={modalNewProductState}
          title="New Product"
        >
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="container-input">
              <label>Nombre: </label>
              <input name="name" type="text" placeholder="Nombre" required />
            </div>
            <div className="container-input">
              <label htmlFor="">Precio: </label>
              <input name="price" type="text" placeholder="precio" required />
            </div>

            <div className="container-input">
              <label htmlFor="">Url IMG: </label>
              <input name="img" type="text" placeholder="url" required />
            </div>

            <div className="container-input">
              <label htmlFor="">Descripcion </label>
              <input
                name="description"
                type="text"
                placeholder="description"
                required
              />
            </div>

            <div className="button-form-user">
              <button type="submit">Crear</button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};
{
  /* <form onSubmit={handleSubmit}>
<label>Nombre</label>
<input type="text" name="name" placeholder="name" />
<label>Precio</label>
<input type="text" name="price" placeholder="price" />
<label>Url IMG</label>
<input type="text" name="img" placeholder="img" />
<label>Descriotion</label>
<input type="text" name="description" placeholder="desc" />
<button type="submit">New Product</button>
</form> */
}
