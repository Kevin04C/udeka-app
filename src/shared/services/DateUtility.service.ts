import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

const formatearFechayHora = (fecha) => {
  // Parsear la fecha ISO
  const date = parseISO(fecha);

  const utcOffset = date.getTimezoneOffset(); // Obtiene la diferencia en minutos
  const utcDate = new Date(date.getTime() + utcOffset * 60000); // Ajustar a UTC

  return format(utcDate, "dd/MM/yyyy HH:mm");
}


export default {
  formatearFechayHora
}