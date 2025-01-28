import React from "react";
import "./BtonWhatsApp.css";
import "font-awesome/css/font-awesome.min.css"; // Asegúrate de que FontAwesome está instalado y correctamente importado.

const BtonWhatsApp: React.FC = () => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=523841090455&text=${encodeURIComponent(
    "Hola, me gustaria Obtener más información"
  )}`;

  return (
    <a href={whatsappUrl} className="float">
      <i className="fa fa-whatsapp my-float"></i>
    </a>
  );
};

export default BtonWhatsApp;
