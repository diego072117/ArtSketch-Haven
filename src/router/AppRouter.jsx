import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Nav } from "../components/Nav/Nav";
import { Products } from "../pages/products/Products";
import { Footer } from "../components/Footer/Footer";
import { DetailsProduct } from "../pages/detailsProduct/DetailsProduct";
import { Login } from "../pages/login/Login";
import { Admin } from "../pages/admin/Admin";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const isAdmin = () => {
    // Verifica si el usuario está autenticado y tiene el rol de "admin"
    return isAuthenticated && user && user.role === "admin";
  };
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details-product/:id" element={<DetailsProduct />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashAdmin"
          element={
            isAdmin() ? (
              <Admin />
            ) : (
              <>denied access pa'</>
            )
          }
        />
      </Routes>
      <Footer />
    </>
  );
};
