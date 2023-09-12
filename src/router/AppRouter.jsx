import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Nav } from "../components/Nav/Nav";
import { Products } from "../pages/products/Products";
import { Footer } from "../components/Footer/Footer";
import { DetailsProduct } from "../pages/detailsProduct/DetailsProduct";
import { Login } from "../pages/login/Login";
import { Admin } from "../pages/admin/Admin";

export const AppRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details-product/:id" element={<DetailsProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashAdmin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
};
