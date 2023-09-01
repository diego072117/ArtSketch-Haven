import { Link } from "react-router-dom";
import bannerImage from "./images/spider.png";
import "./Module.scss";

export const BannerInfo = () => {
  return (
    <>
      <div className="container-bannerinfo">
        <div className="info-bannerinfo">
          <h1 className="title-bannerinfo">
            Welcome To Our
            <br />
            ArtSketch Haven
          </h1>
          <p className="text-bannerinfo">
            Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet
            non necessitatibus error distinctio mollitia suscipit. Nostrum fugit
            doloribus consequatur distinctio esse, possimus maiores aliquid
            repellat beatae cum, perspiciatis enim, accusantium perferendis.
          </p>
          <Link to="/" className="button-bannerinfo">CONTACT US</Link>
        </div>
        <div className="image-bannerinfo">
          <img src={bannerImage} alt="" />
        </div>
      </div>
    </>
  );
};
