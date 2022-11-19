import  { dades } from "./dades.js"
import { validaNouUsuari } from "./validaNouUsuari.js"

export const usuari = {
    /*
    Utiliza find
    /El metodo get (recibe nick), crea una variable BusquedaUsuari 
    /Y busca si el nick que le has pasado coincide con el usuario de la base de datos. 
    /Si es indefinido, dará error, en caso contrario, la propiedad Usuari será el nick
    */
    get: (nick) => {
        const BusquedaUsuari = dades.find(usuari => usuari.nick == nick)
        if (BusquedaUsuari === undefined) {
            return {
                error: true,
                missatge: "L'usuari no existeix"
            }
        } else {
            return {
                error: false,
                usuari: BusquedaUsuari
            }
        }
    },
    /*
    Utiliza findIndex
    El metodo update(recibe el objeto dadesUsuari), crea una variable llamada BusquedaUsuari
    Y busca si el nick coincide con el de la base de datos. Si NO coincide(indefinido), dará error
    Si no fuese así, crea una variable llamada ActualizaUsuari, que filtra por el nick
    Comprueba si esta vacío. Si es true, dará error, si no, el objeto dadesUsuari se guardará en la base de datos
    */
    update: (dadesUsuari) => {
        const BusquedaUsuari = dades.find(usuari => usuari.nick == dadesUsuari.nick)
        if (BusquedaUsuari === undefined) {
            return {
                error: true,
                missatge: "L'usuari no existeix"
            }
        } else {
            const ActualizaUsuari = dades.findIndex(usuari => usuari.nick == dadesUsuari.nick)
            if (dadesUsuari.avatar == '' || dadesUsuari.dataNeixement == '' || dadesUsuari.pass == '') {
                return {
                    error: false,
                    missatge: "Dades actualitzades",
                    usuari: {
                        "nick": dades[ActualizaUsuari].nick,
                        "pass": dades[ActualizaUsuari].pass,
                        "avatar": dades[ActualizaUsuari].avatar,
                        "dataNeixement": dades[ActualizaUsuari].dataNeixement
                    }
                }
            }
            dades[ActualizaUsuari] = dadesUsuari
            return {
                error: false,
                missatge: "Dades actualitzades",
                usuari: {
                    nick: dadesUsuari.nick,
                    pass: dadesUsuari.pass,
                    avatar: dadesUsuari.avatar,
                    dataNeixement: dadesUsuari.dataNeixement
                }
            }
        }
    },
    /*
    Utiliza findIndex y splice
    El metodo delete(recibe nick), crea una variable llamada BorraUsuari, que busca por el nick
    Creo una variable eliminar, que busca la posicion del nick, y el metodo splice, selecciono el elemento por cual empieza, y le dices hasta donde tiene que eliminar
    Si es indefinido, daráerror en caso contrario, devuelve el ultimo return
    */
    delete: (nick)=>{
        const BorraUsuari = dades.find(usuari => usuari.nick == nick)

        const eliminar = dades.findIndex(usuari=>usuari.nick == nick)
        dades.splice(1,eliminar)
        
        if (BorraUsuari === undefined) {
            return {
                error: true,
                missatge: "L'usuari no existeix"
            }
        } else {
           return {
                error: false,
                missatge: `L'usuari ${nick} s'ha esborrat de la base de dades`,
                usuari: BorraUsuari
           }
            
        }
    },
    /*
    El metodo set (recibe usuari), y guarda en la variable validat, el error de la funcion validaNouUsuari
    Si el error es falso, hace un push 
    */
    set: (usuari)=>{
        let validat = validaNouUsuari(usuari).error
        if(validat==false){
            dades.push(usuari)
        }
    } 
}