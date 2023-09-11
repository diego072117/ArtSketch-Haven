import { Link } from "react-router-dom";
import { BannerProducts } from "../../components/BannerProducts/BannerProducts";
import { drawings } from "../../service/Data.json";
import "./Module.scss";

const MAX_CHARACTERS_NAME = 11;

export const Products = () => {
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
          {drawings.map((drawing) => (
            <Link
              to={`/details-product/${drawing.id}`}
              className="card-product"
              key={drawing.id}
            >
              <div className="image-product">
                <img src={drawing.img} alt="" />
              </div>
              <div className="info-product">
                <p>
                  {drawing.name.length > MAX_CHARACTERS_NAME
                    ? `${drawing.name.slice(0, MAX_CHARACTERS_NAME)}...`
                    : drawing.name}
                </p>
                <p className="price">${drawing.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
