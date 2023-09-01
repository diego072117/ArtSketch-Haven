import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export const ArtApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
