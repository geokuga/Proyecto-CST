import React from "react";
import "./BtonWhatsApp.css";
import "font-awesome/css/font-awesome.min.css";

const BtonWhatsApp: React.FC = () => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=523841090455&text=${encodeURIComponent(
    "Hola, me gustaría obtener más información"
  )}`;

  return (
    <a
      href={whatsappUrl}
      className="float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp my-float"></i>
    </a>
  );
};

export default BtonWhatsApp;
