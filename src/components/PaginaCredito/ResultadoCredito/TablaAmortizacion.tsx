import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { format, addMonths, isWeekend, addDays } from "date-fns";

// Extiende jsPDF para incluir lastAutoTable
declare module "jspdf" {
  interface jsPDF {
    lastAutoTable: {
      finalY: number;
    };
  }
}

interface TablaAmortizacionProps {
  tipoCredito: string;
  cantidad: number;
  plazo: string;
  tasaMensual: number;
}

const TablaAmortizacion: React.FC<TablaAmortizacionProps> = ({
  tipoCredito,
  cantidad,
  plazo,
  tasaMensual,
}) => {
  const calcularFechasPagos = (inicio: Date, numeroPagos: number): Date[] => {
    const fechas: Date[] = [];
    let fecha = inicio;
    for (let i = 0; i < numeroPagos; i++) {
      fecha = addMonths(fecha, 1);
      while (isWeekend(fecha)) {
        fecha = addDays(fecha, 1);
      }
      fechas.push(fecha);
    }
    return fechas;
  };

  const numeroPagos = 12; // Solo mensual por ahora
  const saldoInicial = cantidad;
  const pagoCapital = cantidad / numeroPagos;

  const fechaInicio = new Date();
  const fechasPago = calcularFechasPagos(fechaInicio, numeroPagos);

  let saldo = saldoInicial;
  const rows: any[] = [];
  let totalInteres = 0;
  let totalIVA = 0;
  let totalPago = 0;

  for (let i = 0; i < numeroPagos; i++) {
    const interes = saldo * tasaMensual;
    const iva = tipoCredito === "personal" ? interes * 0.16 : 0;
    const total = pagoCapital + interes + iva;

    totalInteres += interes;
    totalIVA += iva;
    totalPago += total;

    rows.push([
      i + 1,
      format(fechasPago[i], "dd/MM/yyyy"),
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
    doc.text("Producto contratado: " + tipoCredito.toUpperCase(), 10, 10);
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
      `Tasa de interés: ${(tasaMensual * 12 * 100).toFixed(2)}% (anual)`,
      10,
      42
    );
    doc.text(`Monto prestado: $${cantidad.toFixed(2)}`, 10, 50);
    doc.text(`Número de pagos: ${numeroPagos}`, 10, 58);

    autoTable(doc, {
      startY: 66,
      head: [
        [
          "Número",
          "Fecha de pago",
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
