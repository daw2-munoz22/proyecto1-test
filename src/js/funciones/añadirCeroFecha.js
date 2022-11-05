export const añadirCeroFecha = (fecha, tipo)=>{
    if (tipo == 0){
        return String(fecha.getHours()).padStart(2,'0');    
    }
    else if (tipo == 1){
        return String(fecha.getMinutes()).padStart(2,'0');    
    }
    else if (tipo == 2){
        return String(fecha.getSeconds()).padStart(2,'0');    
    } 
}