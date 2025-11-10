// App.tsx
import "./App.css";
import Navbar from "./components/PaginaHome/navbar/Navbar";
import HeaderHome from "./components/PaginaHome/HeaderHome/HeaderHome";
import Requisitos from "./components/PaginaHome/Requisitos/Requisitos";
import BtonWhatsApp from "./components/PaginaHome/BtonWhatsApp/BtonWhatsApp";
import Descripcion from "./components/PaginaHome/descripcion/Descripcion";
import Mision from "./components/PaginaHome/MisionVision/MisionVision";
import EnlaceIcons from "./components/PaginaHome/EnlaceIcons/EnlaceIcons";
import Final from "./components/PaginaHome/footer/footer";
import Credito from "./components/PaginaCredito/Credito";
import Promociones from "./components/Promociones/Promociones";
import Water from "./components/Water/Water";
import OtrosBeneficios from "./components/OtrosBeneficios/OtrosBeneficios";
import Ahorros from "./components/Ahorros/Ahorros";
import Avisos from "./components/Avisos/Avisos";

import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function MainContent() {
  const location = useLocation();

  return (
    <div className="fondo">
      <ScrollToTop />
      {location.pathname !== "/credito" && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="headerHome">
                <HeaderHome />
              </div>
              <div id="descripcion">
                <Descripcion />
              </div>
              <div id="mision">
                <Mision />
              </div>
              <div id="requisitos">
                <Requisitos />
              </div>
              <div id="enlaceIcons">
                <EnlaceIcons />
              </div>
              <div id="btonWhatsApp">
                <BtonWhatsApp />
              </div>
              <div id="final">
                <Final />
              </div>
            </>
          }
        />

        <Route path="/ahorros" element={<Ahorros />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/water" element={<Water />} />
        <Route path="/otrosBeneficios" element={<OtrosBeneficios />} />
        <Route path="/credito" element={<Credito />} />
        <Route path="/avisos" element={<Avisos />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}
