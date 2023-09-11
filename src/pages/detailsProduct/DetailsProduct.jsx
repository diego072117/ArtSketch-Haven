import { drawings } from "../../service/Data.json";
import { useParams } from "react-router-dom";
import "./Module.scss";
import { ScrollToTop } from "../../hooks/ScrollToTop";

export const DetailsProduct = () => {
  const { id } = useParams();

  const product = drawings.find((drawings) => drawings.id === parseInt(id));

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
