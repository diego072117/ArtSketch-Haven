import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Nav } from "../components/Nav/Nav";
import { Products } from "../pages/products/Products";
import { Footer } from "../components/Footer/Footer";

export const AppRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer/>
    </>
  );
};
