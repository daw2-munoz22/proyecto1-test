export const edat = (dataText)=>{
    let year = new Date(dataText);
    //let texto = `${year.getFullYear()}/${añadirCeroMes(year, 0)}/${añadirCeroMes(year, 1)}`;
    //en la variable edad, resto el año actual y la fecha seleccionada mediante el formulario y llamo a la variable para devolver el valor
    var edad = new Date().getFullYear() - year.getFullYear();
    console.log(edad);
    //dades.push(texto);
    if(isNaN(edad)){
        return  {
            error: true,
            missatge: "El format no és correcte"
        }  
    }
    return edad;
}