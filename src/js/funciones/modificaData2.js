import { añadirCeroFecha } from "./añadirCeroFecha.js";
import { añadirCeroMes } from "./añadirCeroMes.js";


export const modificaData2 = (fecha2)=>{    
    let resultado2 = `${fecha2.getFullYear()}/${añadirCeroMes(fecha2, 0)}/${añadirCeroMes(fecha2, 1)} ${añadirCeroFecha(fecha2,0)}:${añadirCeroFecha(fecha2,1)}:${añadirCeroFecha(fecha2,2)}`;
    console.log(resultado2);
    return resultado2;
}