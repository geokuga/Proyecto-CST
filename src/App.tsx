import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import Publicidad from "./components/publicidad/publicidad";
import Requisitos from "./components/Requisitos/Requisitos";
import BtonWhatsApp from "./components/BtonWhatsApp/BtonWhatsApp";
import Descripcion from "./components/descripcion/Descripcion";
import Mision from "./components/MisionVision/MisionVision";
import Final from "./components/footer/footer";

export default function App() {
  return (
    <div className="fondo">
      <Navbar />
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
    </div>
  );
}
