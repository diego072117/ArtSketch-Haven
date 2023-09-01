import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Nav } from "../components/Nav/Nav";

export const AppRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
