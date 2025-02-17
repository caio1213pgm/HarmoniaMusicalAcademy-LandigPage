import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./pages/App.tsx";
import { register } from "swiper/element";
register();
import "swiper/swiper-bundle.css";
import ContatosPage from "./pages/ContatosPage/ContatosPage.tsx";
import ServicosPage from "./pages/ServicosPage.tsx";
import BoasVindas from "./pages/BoasVindas.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contatos" element={<ContatosPage />} />
      <Route path="/servicos" element={<ServicosPage />} />
      <Route path="/boasVindas?" element={<BoasVindas />} />
    </Routes>
  </BrowserRouter>
);
