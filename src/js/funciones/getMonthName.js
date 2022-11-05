export const getMonthName = (fecha)=>{
    let monthnames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    return monthnames[fecha.getMonth()];
}