import { dades } from "./dades.js"
export const validaNouUsuari = (usuari)=>{
     //event.preventDefault()//se necesitaba pasar el parámetro event para ejecutar la funcion preventDefault
    //creación del objeto dadesUsuari, que en cada propiedad, guarda el valor de cada input co getElementById
    
    /*1*/
    console.log(usuari);
    /*const dadesUsuari =
    {
        nick: document.getElementById("nick").value,
        password: document.getElementById("pass").value,
        points: 0,
        avatar: document.getElementById("avatar").value
    }*/

    //recorro la base de datos 
    for (let index = 0; index < dades.length; index++) {           
        //compruebo si la longitud (nick) es más pequeño que 3 o más grande que 10
        if (usuari.nick.length < 3 || usuari.nick.length > 10)
        {
            return {
                error: true,
                missatge: "El nick no és correcte"
            }
        }else{
            if(usuari.pass == null || isNaN(usuari.pass))
            {
                return {
                    error: true,
                    missatge: "La contrasenya no és correcte"
                }
            }               
            else{
                                           
                //compruebo si la contraseña es más pequeño que 3 o más grande que 10
                if(usuari.pass.length<3|| usuari.pass.length>10){
                    return {
                        error: true,
                        missatge: "La contrasenya no és correcte"
                    }
                } else {
                
                    //recorro la base de dados y compruebo si el nick de la base de datos existe
                    for (let index = 0; index < dades.length; index++) {
                        if (dades[index].nick == usuari.nick) {
                            return {
                                error: true,
                                missatge: "Aquest usuari ja existeix"
                            }
                        }                   
                    }
                    //si todo ha ido bien
                    return {
                        error: false,
                        missatge: `L’usuari amb nick: ${usuari.nick} s’ha creat correctament`
                    }
                    //El dades[index] lo tienes que mirar entero y hacer return si encuentras algo igual sino salir del if y decir correcto                
                }                            
            }
        }
    }
}