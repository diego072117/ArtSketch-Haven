import { Link } from "react-router-dom";
import chico from "./images/chico.png";
import "./Module.scss";

export const BannerProducts = () => {
  return (
    <>
      <div className="container-bannerproducts">
        <div className="image-bannerproducts">
          <img src={chico} alt="" />
        </div>
        <div className="content-bannerproducts">
          <h1>
            DISCOVER OUR FEATURED
            <br />
            TREASURES NOW
          </h1>
          <p>
            Explore our amazing offers on the latest additions. Shop now and
            choose the <br />
            excellence you deserve!
          </p>
          <div className="buttons-bannerproducts">
            <Link to="/" className="button-bannerproducts">
              Products
            </Link>
            <Link to="/" className="button-bannerseemore">
              See more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
