export const añadirCeroMes = (fecha, tipo)=>{
    switch(tipo) {
        case 0:
            return String(fecha.getMonth()+1).padStart(2,'0');           
        case 1:
            return String(fecha.getDate()).padStart(2,'0');           
        default:
            break;          
    }         
}