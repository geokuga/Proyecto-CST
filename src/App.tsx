import "./App.css";
import Navbar from "./components/PaginaHome/navbar/Navbar";
import HeaderHome from "./components/PaginaHome/HeaderHome/HeaderHome";
import Publicidad from "./components/PaginaHome/publicidad/publicidad";
import Requisitos from "./components/PaginaHome/Requisitos/Requisitos";
import BtonWhatsApp from "./components/PaginaHome/BtonWhatsApp/BtonWhatsApp";
import Descripcion from "./components/PaginaHome/descripcion/Descripcion";
import Mision from "./components/PaginaHome/MisionVision/MisionVision";
import Final from "./components/PaginaHome/footer/footer";
import Credito from "./components/PaginaCredito/Credito";
import AdvertisingManager from "./components/PaginaHome/publicidad/advertisingManager";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function MainContent() {
  const location = useLocation();

  return (
    <div className="fondo">
      {location.pathname !== "/credito" && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="headerHome">
                <HeaderHome />
              </div>
              <div id="publicidad">
                <Publicidad />
              </div>
              <div id="requisitos">
                <Requisitos />
              </div>
              <div id="btonWhatsApp">
                <BtonWhatsApp />
              </div>
              <div id="descripcion">
                <Descripcion />
              </div>
              <div id="mision">
                <Mision />
              </div>
              <div id="final">
                <Final />
              </div>
            </>
          }
        />
        <Route path="/credito" element={<Credito />} />
        <Route path="/advertisingManager" element={<AdvertisingManager />} />
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
