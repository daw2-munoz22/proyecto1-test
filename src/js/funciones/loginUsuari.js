
import { validaLogin } from "./validaLogin.js";
export const loginUsuari = ()=>{
    const inputNameL = document.querySelector("#nickLogin")
    const inputPasswordL = document.querySelector("#passLogin")

    const dadesUsuari =
    {
        nick:inputNameL.value,
        password:inputPasswordL.value,
    }
    //creo una variable y llamo a la función anterior (validaLogin) y le paso el objeto. Luego se muestra con alert el mensaje    
    let m1 = validaLogin(dadesUsuari);
    alert(m1.missatge);
}