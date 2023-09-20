import { Link } from "react-router-dom";
import { BannerProducts } from "../../components/BannerProducts/BannerProducts";
import { useSelector, useDispatch } from "react-redux";
import { showAllProducts } from "../../store/products/slice";
import { useEffect } from "react";
import "./Module.scss";


const MAX_CHARACTERS_NAME = 11;

export const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  // Mostrar todos los productos al montar el componente
  useEffect(() => {
    dispatch(showAllProducts());
  }, [dispatch]);

   // Filtrar solo los productos con isVisible en true
   //const visibleProducts = products.filter((product) => product.isVisible);
  return (
    <>
      <BannerProducts
        title="DISCOVER OUR SHOWCASED"
        title2="GEMS TODAY"
        showButtons={false}
      />

      <div className="container-section-products">
        <h1>LATEST PRODUCTS</h1>
        <div className="container-cards-products">
          {products.map((product) => (
            <Link
              to={`/details-product/${product.id}`}
              className="card-product"
              key={product.id}
            >
              <div className="image-product">
                <img src={product.img} alt="" />
              </div>
              <div className="info-product">
                <p>
                  {product.name.length > MAX_CHARACTERS_NAME
                    ? `${product.name.slice(0, MAX_CHARACTERS_NAME)}...`
                    : product.name}
                </p>
                <p className="price">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
