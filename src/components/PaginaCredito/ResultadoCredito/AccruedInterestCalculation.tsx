import {
  addMonths,
  addDays,
  differenceInCalendarDays,
  addWeeks,
  addYears,
  isSaturday,
  isSunday,
} from "date-fns";

export const numberOfPayments = (loanTerm: string, plan: number): number => {
   if (!plan || isNaN(plan) || plan <= 0) return 1; // valor por defecto
  let start = new Date();
  let end = addMonths(start, plan);
  let days = differenceInCalendarDays(end, start);
  let numberOfPayments = 1;
  switch (loanTerm) {
    case "semanales":
      numberOfPayments = Math.floor(days / 7);//Math.floor(4.33 * plan); //depende de plazo
      break;
    case "quincenales":
      numberOfPayments = 2 * plan;
      break;
    case "mensuales":
      numberOfPayments = plan;
      break;
    case "bimestrales":
      numberOfPayments = Math.floor(plan / 2);
      break;
    case "semestrales":
      numberOfPayments = plan / 6;
      break;
    case "anual":
      numberOfPayments = 1;
      break;
    case "unico":
      numberOfPayments = 1;
      break;
    default:
      numberOfPayments = 1;
  }
  return numberOfPayments;
};

export const interestCalculation = (
  loanAmount: number,
  paymentDays: number,
  annualRate: number
): number => {
  let interest = 0;
  interest = (loanAmount * paymentDays * annualRate) / 360;
  return interest;
};

export const ivatCalculation = (amount: number): number => {
  return amount * 0.16;
};

export const periodPayment = (
  paymentByPeriod: number,
  interes: number,
  ivat: number
) => {
  return paymentByPeriod + interes + ivat;
};

// Cuenta los días hábiles entre dos fechas
const countWeekdays = (start: Date, end: Date): number => {
  let count = 0;
  const current = new Date(start);
  while (current < end) {
    count++;
    current.setDate(current.getDate() + 1);
  }
  return count;
};
// Genera el arreglo de días hábiles por pago
export const generatePaymentDays = (
  startDate: Date,
  numberOfPayments: number,
  daysBetweenPayments: number
): number[] => {
  const paymentDays: number[] = [];

  let current = new Date(startDate);

  for (let i = 0; i < numberOfPayments; i++) {
    const next = new Date(current);
    next.setDate(next.getDate() + daysBetweenPayments);

    const days = countWeekdays(current, next);
    paymentDays.push(days);

    current = next;
  }

  return paymentDays;
};

export const calcularFechasPagos = (
  inicio: Date,
  numeroPagos: number,
  loanTerm: string
): { fechasPago: Date[]; diasEntreFechas: number[] } => {
  const fechasPago: Date[] = [];
  const diasEntreFechas: number[] = [];

  let fecha = inicio;

  for (let i = 0; i < numeroPagos; i++) {
    let fechaTmp = new Date(fecha); 
    switch (loanTerm) {
      case "semanales":
        fechaTmp = addWeeks(fecha, 1);
        break;
      case "quincenales":
        fechaTmp = addDays(fecha, 15);
        break;
      case "mensuales":
        fechaTmp = addDays(fecha, 30);
        break;
      case "bimestrales":
        fechaTmp = addMonths(fecha, 2);
        break;
      case "semestrales":
        fechaTmp = addMonths(fecha, 6);
        break;
      case "anual":
        fechaTmp = addYears(fecha, 1);
        break;
      case "unico":
        fechaTmp = addMonths(fecha, 18);
        break;
      default:
        break;
    }
    if (isSaturday(fechaTmp)) {
      fechaTmp = addDays(fechaTmp, 2);
    } else if (isSunday(fechaTmp)) {
      fechaTmp = addDays(fechaTmp, 1);
    }

    fechasPago.push(fechaTmp);

    if (i === 0) {
      diasEntreFechas.push(differenceInCalendarDays(fechaTmp, inicio));
    } else {
      const anterior = fechasPago[i - 1];
      diasEntreFechas.push(differenceInCalendarDays(fechaTmp, anterior));
    }
    fecha = fechaTmp;
  }
  return { fechasPago, diasEntreFechas };
};
