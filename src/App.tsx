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
  //jsx -> React.createElement

  return (
    <div className="fondo">
      <div>
        <Navbar />
      </div>
      <div>
        <HeaderHome />
      </div>
      <div>
        <Publicidad />
      </div>
      <div>
        <Requisitos />
      </div>
      <div>
        <BtonWhatsApp />
      </div>
      <div>
        <Descripcion />
      </div>
      <div>
        <Mision />
      </div>
      <div>
        <Final />
      </div>
    </div>
  );
}
