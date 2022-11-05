
export const creaUsuariValid = (event)=>{
    /*Creo unas variables y guardo el valor de cada input*/
    const inputName = document.querySelector("#nick")
    const inputPassword = document.querySelector("#pass")
    const inputAvatar = document.querySelector("#avatar")
    event.preventDefault()//se necesitaba pasar el parámetro event para ejecutar la funcion preventDefault
    //creación del objeto dadesUsuari, que en cada propiedad, guarda el valor de cada input con getElementById. Por defecto, el apartado points lo defino a NULL puesto que en el formulario NO hay ningun imput
    //creo un objeto vacío y le voy asignando a cada propiedad, sus respectivos valores
    let dadesUsuari = {}
        dadesUsuari.nick = inputName.value,
        dadesUsuari.password = inputPassword.value,
        dadesUsuari.avatar = inputAvatar.value,
        dadesUsuari.points = 0
        //dadesUsuari.fecha_registro = modificaData

        let nuevonick = modificaNick(dadesUsuari.nick);
        //dadesUsuari.nick = nuevonick 

        console.log(dadesUsuari.nick)//muestro por consola el nick
        console.log(dadesUsuari.avatar)//muestro por consola el avatar

    //guardo en la variable validació el mensaje de la función validaNouUsuari
    let validacio = validaNouUsuari(dades).missatge;
    //compruebo el mensaje y SI todo ha ido bien, hace el push y muestra el mensaje (correcto o error)
    if (validacio == `L'usuari amb nick: ${dadesUsuari.nick} s'ha creat correctament`){
        //modificaNick()
        dades.push(dadesUsuari); //Sirve para modificar el DOM (añadir objeto al array dades)    
    }
    alert(validacio)
    console.log(dades)
    //document.querySelector('#ranking').innerHTML = dadesUsuari
    var tbody = document.querySelector('#ranking').innerHTML=mostraTaula(dades)   //llamo a la función mostraTaula y le paso la base de datos (dades)
   
}