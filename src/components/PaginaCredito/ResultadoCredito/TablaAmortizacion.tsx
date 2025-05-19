import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { format } from "date-fns";
import { calcularFechasPagos } from "./AccruedInterestCalculation";

// Extiende jsPDF para incluir lastAutoTable
declare module "jspdf" {
  interface jsPDF {
    lastAutoTable: {
      finalY: number;
    };
  }
}

interface TablaAmortizacionProps {
  loanType: string;
  amount: number;
  loanTerm: string;
  interestRate: number;
  repaymentPlan: number;
  pagosTotales: number;
}

const TablaAmortizacion: React.FC<TablaAmortizacionProps> = ({
  loanType,
  amount,
  loanTerm,
  interestRate,
  repaymentPlan,
  pagosTotales
}) => {

  const numeroPagos = pagosTotales;
  const saldoInicial = amount;
  const pagoCapital = amount / numeroPagos;
  const ivaRate = loanType === "personal" ? 0.16 : 0;

  const fechaInicio = new Date();
  const { fechasPago, diasEntreFechas } = calcularFechasPagos(fechaInicio, numeroPagos, loanTerm);

  let saldo = saldoInicial;
  const rows: any[] = [];
  let totalInteres = 0;
  let totalIVA = 0;
  let totalPago = 0;

  for (let i = 0; i < diasEntreFechas.length; i++) {
    const interes = (saldo * diasEntreFechas[i] * interestRate) / 360;
    const iva = loanType === "personal" ? interes * 0.16 : 0;
    const total = pagoCapital + interes + iva;

    totalInteres += interes;
    totalIVA += iva;
    totalPago += total;

    rows.push([
      i + 1,
      format(fechasPago[i], "dd/MM/yyyy"),
      `${diasEntreFechas[i]}`,
      `$${saldo.toFixed(2)}`,
      `$${pagoCapital.toFixed(2)}`,
      `$${interes.toFixed(2)}`,
      `$${iva.toFixed(2)}`,
      `$${total.toFixed(2)}`,
    ]);

    saldo -= pagoCapital;
  }

  const exportarPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(8);
    doc.text("Producto contratado: PRESTAMO " + loanType.toUpperCase() + " CON TOPE A " + amount +
      " CON GARANTIA LIQUIDA MINIMA DEL 10% MAXIMO 20% A UN PLAZO DE " + repaymentPlan + " MESES",
      10, 10);
    doc.text(
      "Fecha de solicitud: " + format(fechaInicio, "dd/MM/yyyy"),
      10,
      18
    );
    doc.text("Fecha de entrega: " + format(fechaInicio, "dd/MM/yyyy"), 60, 18);
    doc.text(
      "Fecha de vencimiento: " +
      format(fechasPago[fechasPago.length - 1], "dd/MM/yyyy"),
      110,
      18
    );
    doc.text(
      `Tasa de interés: ${(interestRate * 120).toFixed(2)}% (anual)`,
      10,
      24
    );
    doc.text(
      `CAT(Costo Anual Total): %${ivaRate.toFixed(2)} ANUAL`,
      60,
      24
    );
    doc.text(`Monto prestado: $${amount.toFixed(2)}`, 10, 30);
    doc.text(`Número de pagos: ${numeroPagos}`, 60, 30);

    autoTable(doc, {
      startY: 40,
      head: [
        [
          "Número",
          "Fecha de pago",
          "dias",
          "Saldo",
          "Pago Capital",
          "Pago Interés",
          "I.V.A",
          "Total a pagar",
        ],
      ],
      body: rows,
      styles: { fontSize: 9 },
      theme: "grid",
      headStyles: { fillColor: [184, 184, 184] },
    });
    // Coordenada vertical base
    const y = doc.lastAutoTable.finalY + 6;

    // Establece el color del borde
    doc.setDrawColor(184, 184, 184);

    // Usar posiciones relativas en lugar de cols[4].x, etc.
    const columnWidths = [20, 30, 15, 30, 30, 30, 30, 35]; // Ajusta a tu tabla
    let x = 103; // margen izquierdo inicial

    const totales = [
      "", "", "", "",
      `$${amount.toFixed(2)}`,
      `$${totalInteres.toFixed(2)}`,
      `$${totalIVA.toFixed(2)}`,
      `$${totalPago.toFixed(2)}`
    ];

    for (let i = 4; i <= 7; i++) {
      const rectWidth = columnWidths[i] - 8; // más ancho
      doc.rect(x, y - 6, rectWidth, 6);
      doc.text(totales[i], x + 1, y - 2);
      x += rectWidth; // avanza lo justo, más pegado
    }



    doc.save("amortizacion.pdf");
  };

  return (
    <section style={{ marginTop: "20px", textAlign: "center" }}>
      <button onClick={exportarPDF}>Descargar tabla de amortización</button>
    </section>
  );
};

export default TablaAmortizacion;
