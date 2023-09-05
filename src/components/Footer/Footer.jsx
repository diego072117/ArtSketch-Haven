import { Link } from "react-router-dom";
import "./Module.scss";

export const Footer = () => {
  return (
    <div className="container-footer">
      <div className="footer-social">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
      <div className="container-footer-info">
        <div className="section-one">
          <h3 className="title-section">ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum
            dolor sit amet
          </p>
        </div>
        <div className="section-two">
          <h3 className="title-section">ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum
            dolor sit amet
          </p>
        </div>
        <div className="section-three">
          <h3 className="title-section">CONTACT US</h3>
          <p>aqui la ubicacion </p>
          <p>+57 1001001023</p>
          <p>ArtSketchHaven@gmail.com</p>
        </div>
        <div className="section-four">
          <h3>SEND</h3>
          <input type="text" placeholder="Email" />
          <div>
            <Link to="/" className="button-footer">
              SEND
            </Link>
          </div>
        </div>
      </div>
      <p className="footer-created">© 2023 ArtSketch Haven</p>
    </div>
  );
};
