import { useParams } from "react-router-dom";
import { ScrollToTop } from "../../hooks/ScrollToTop";
import { useSelector } from "react-redux";
import "./Module.scss";

export const DetailsProduct = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((products) => products.id === parseInt(id));

  return (
    <>
      <ScrollToTop />
      <div className="details-container">
        <div className="card-details">
          <div className="details-img">
            <img src={product.img} alt="" />
          </div>
          <div className="details-info">
            <div className="name-details">
              <h2>{product.name}</h2>
              <h2 className="price">{product.price}</h2>
            </div>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
