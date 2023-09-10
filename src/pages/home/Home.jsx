import { BannerInfo } from "../../components/BannerInfo/BannerInfo";
import { BannerProducts } from "../../components/BannerProducts/BannerProducts";
import { Footer } from "../../components/Footer/Footer";
import "./Module.scss";

export const Home = () => {
  return (
    <>
      <BannerInfo />
      <div className="benefits">
        <h1 className="title-cards-home">WHY SHOP WITH US</h1>

        <div className="container-benefits">
          <div className="card-benefits">
            <div className="icon-benefits">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <h5>Quick Dispatch</h5>
            <p>various interpretations of artistic inspiration</p>
          </div>
          <div className="card-benefits">
            <div className="icon-benefits">
              <i className="fa-solid fa-earth-americas"></i>
            </div>
            <h5>Complimentary Shipping</h5>
            <p>various interpretations of artistic inspiration</p>
          </div>
          <div className="card-benefits">
            <div className="icon-benefits">
              <i className="fa-solid fa-medal"></i>
            </div>
            <h5>Supreme Excellence</h5>
            <p>various interpretations of artistic inspiration</p>
          </div>
        </div>
      </div>
      <BannerProducts
        title="DISCOVER OUR FEATURED"
        title2="TREASURES NOW"
        showButtons={true}
      />
    </>
  );
};
