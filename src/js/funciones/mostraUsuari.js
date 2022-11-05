export const mostraUsuari = (dadesUsuari){
    //creación del objeto dadesUsuari, que en cada propiedad, guarda el valor de cada input con getElementById
    dadesUsuari = 
        {
            nick: document.getElementById("nick").value,
            password: document.getElementById("pass").value,
            points: document.getElementById('puntos').value,
            avatar: document.getElementById("avatar").value
        }
    dades.push(dadesUsuari); //Sirve para modificar el DOM (añadir objeto al array dades)    
    console.log(dadesUsuari)//muestro por consola el objeto
}