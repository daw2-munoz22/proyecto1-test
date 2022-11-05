import { añadirCeroFecha } from "./añadirCeroFecha.js";
import { getMonthName } from "./getMonthName.js";
export const modificaData = (fecha)=>{
    let dia = `${fecha.getDate()} ${getMonthName(fecha)} -  ${fecha.getFullYear()} ${añadirCeroFecha(fecha,0)}:${añadirCeroFecha(fecha,1)}:${añadirCeroFecha(fecha,2)}`;
    //console.log(dia);
    return dia
}