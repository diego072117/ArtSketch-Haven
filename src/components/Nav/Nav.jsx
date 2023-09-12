import { Link } from "react-router-dom";
import "./Module.scss";

export const Nav = () => {
  return (
    <nav className="container-nav">
      <Link to="/" className="item-nav">HOME</Link>
      <Link to="/products" className="item-nav">SHOP</Link>
      <Link to="/" className="item-nav">TESTIMONIAL</Link>
      <Link to="/" className="item-nav">CONTACT US</Link>
      <div className="user-options">
        <Link to="/login" className="item-nav">
            <i className="fa fa-user" aria-hidden="true"></i>
             LOGIN
             <i className="fa fa-shopping-bag" aria-hidden="true"></i>
             <i className="fa fa-search" aria-hidden="true"></i>
        </Link>
      </div>
    </nav>
  );
};
