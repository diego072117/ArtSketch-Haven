import { useSelector } from "react-redux";
import { useProductsActions } from "../../hooks/useProductsActions";
import { useEffect, useState } from "react";
import "./Module.scss";
import { Modal } from "../../components/Modal/Modal";

export const Admin = () => {
  const [modalNewProduct, setModalNewProduct] = useState(false);
  const [modalUpdateProduct, setModalUpdateProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const modalNewProductState = () => {
    setModalNewProduct(!modalNewProduct);
  };

  const handleEditProductState = (product) => {
    setSelectedProduct(product);
    setModalUpdateProduct(true);
  };

  const products = useSelector((state) => state.products.products);
  const { newProduct, removeProduct, showAll, updateProduct } =
    useProductsActions();

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

      if (selectedProduct) {
        // Si se seleccionó un producto, entonces estamos en modo edición
        updateProduct({ ...selectedProduct, ...product });
      } else {
        // Si no se seleccionó un producto, entonces estamos en modo creación
        newProduct(product);
      }

      setSelectedProduct(false);
      setModalNewProduct(false);
      setModalUpdateProduct(false);
    }
  };

  return (
    <>
      <div className="containter-table">
        <button className="button-new-product" onClick={modalNewProductState}>
          New Product
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
                  <button
                    className="update"
                    onClick={() => handleEditProductState(product)}
                  >
                    Editar
                  </button>
                  <button
                    className="delete"
                    onClick={() => removeProduct(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal
          isOpen={modalNewProduct || modalUpdateProduct}
          onClose={() => {
            setModalNewProduct(false);
            setModalUpdateProduct(false);
            setSelectedProduct(null);
          }}
          title={selectedProduct ? "Editar Producto" : "Nuevo Producto"}
        >
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="container-input">
              <label>Nombre: </label>
              <input
                name="name"
                type="text"
                placeholder="Nombre"
                required
                defaultValue={selectedProduct ? selectedProduct.name : ""}
              />
            </div>
            <div className="container-input">
              <label>Precio: </label>
              <input
                name="price"
                type="text"
                placeholder="precio"
                required
                defaultValue={selectedProduct ? selectedProduct.price : ""}
              />
            </div>

            <div className="container-input">
              <label>Url IMG: </label>
              <input
                name="img"
                type="text"
                placeholder="url"
                required
                defaultValue={selectedProduct ? selectedProduct.img : ""}
              />
            </div>

            <div className="container-input">
              <label>Descripcion </label>
              <input
                name="description"
                type="text"
                placeholder="description"
                required
                defaultValue={
                  selectedProduct ? selectedProduct.description : ""
                }
              />
            </div>

            <div className="button-form-user">
              <button type="submit">
                {selectedProduct ? "Actualizar" : "Crear"}
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};
