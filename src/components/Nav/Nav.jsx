import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthActions } from "../../hooks/useAuthActions";
import { useEffect } from "react";
import "./Module.scss";

export const Nav = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const { logout } = useAuthActions();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <nav className="container-nav">
      <Link to="/" className="item-nav">
        HOME
      </Link>
      <Link to="/products" className="item-nav">
        SHOP
      </Link>
      <Link to="/" className="item-nav">
        TESTIMONIAL
      </Link>
      <Link to="/" className="item-nav">
        CONTACT US
      </Link>
      <div className="user-options">
        {isAuthenticated ? (
          <>
            {/* Muestra "LOGOUT" cuando el usuario está autenticado */}
            <button className="item-nav" onClick={handleLogout}>
              <i className="fa fa-sign-out" aria-hidden="true"></i> LOGOUT
            </button>
            <div className="info-auth">
              <img className="img-avatar" src={user.avatar} alt="" />
              <p className="username">{user.username}</p>
            </div>
          </>
        ) : (
          <>
            {/* Muestra "LOGIN" cuando el usuario no está autenticado */}
            <Link to="/login" className="item-nav">
              <i className="fa fa-user" aria-hidden="true"></i> LOGIN
            </Link>
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            <i className="fa fa-search" aria-hidden="true"></i>
          </>
        )}
      </div>
    </nav>
  );
};
