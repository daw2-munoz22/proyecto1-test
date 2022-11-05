import { dades } from "./dades.js";

export const validaLogin = (usuari)=>{        
    for (let index = 0; index < dades.length; index++) {
        //Compruebo si el usuario existe. si NO existe, saltará al último return (por defecto)
       if(dades[index].nick == usuari.nick){  
        //Compruebo la contraseña (SI el usuario es correcto). Si NO es correcta, salta al return interno
        if (dades[index].pass != usuari.pass) {
            return {
                error: true,
                missatge: "Contrasenya incorrecta"                            
            }                        
        }
        
        //Comprobar las 2 condiciones anteriores (SI  usuario y contraseña correcta). Si es true, muestra el mensaje Hola + usuario
        //Si el nick existe y la contraseña NO, dará el mensaje Aquest usuari ja existeix    
        if(dades[index].nick == usuari.nick && dades[index].pass == usuari.pass)    
        {
            return {
                error: false,
                missatge: `Hola ${usuari.nick}`
            }   
        }              
        /*return {
            error: true,
            missatge: "Aquest usuari ja existeix"
        } */            
       }      
    } 
    /*Si todo sale mal, dará el mensaje Aquest usuari no existeix*/
    return  {
        error: true,
        missatge: "Aquest usuari no existeix"
    }     
}