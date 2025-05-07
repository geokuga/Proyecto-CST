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

  const fechaInicio = new Date();
  const {fechasPago, diasEntreFechas} = calcularFechasPagos(fechaInicio, numeroPagos, loanTerm);

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

    doc.setFontSize(12);
    doc.text("Producto contratado: " + loanType.toUpperCase(), 10, 10);
    doc.text(
      "Fecha de solicitud: " + format(fechaInicio, "dd/MM/yyyy"),
      10,
      18
    );
    doc.text("Fecha de entrega: " + format(fechaInicio, "dd/MM/yyyy"), 10, 26);
    doc.text(
      "Fecha de vencimiento: " +
        format(fechasPago[fechasPago.length - 1], "dd/MM/yyyy"),
      10,
      34
    );
    doc.text(
      `Tasa de interés: ${(interestRate * 120).toFixed(2)}% (anual)`,
      10,
      42
    );
    doc.text(`Monto prestado: $${amount.toFixed(2)}`, 10, 50);
    doc.text(`Plan de pago: ${repaymentPlan} meses`, 10, 58);
    doc.text(`Número de pagos: ${numeroPagos}`, 10, 64);

    autoTable(doc, {
      startY: 66,
      head: [
        [
          "Número",
          "Fecha de pago",
          "dias",
          "Saldo",
          "Pago Capital",
          "Pago Interés",
          "IVA",
          "Total a pagar",
        ],
      ],
      body: rows,
      styles: { fontSize: 9 },
      theme: "grid",
      headStyles: { fillColor: [22, 160, 133] },
    });

    doc.text(
      `Total intereses: $${totalInteres.toFixed(2)}`,
      10,
      doc.lastAutoTable.finalY + 10
    );
    doc.text(
      `Total IVA: $${totalIVA.toFixed(2)}`,
      10,
      doc.lastAutoTable.finalY + 18
    );
    doc.text(
      `Total pagado: $${totalPago.toFixed(2)}`,
      10,
      doc.lastAutoTable.finalY + 26
    );

    doc.save("amortizacion.pdf");
  };

  return (
    <section style={{ marginTop: "20px", textAlign: "center" }}>
      <button onClick={exportarPDF}>Descargar tabla de amortización</button>
    </section>
  );
};

export default TablaAmortizacion;
