import { expect } from "chai"
import { validaLogin } from "../src/js/funciones/validaLogin.js"

describe("Función validaLogin() ...", ()=>{
    it("si no introduce datos en formulario", ()=>{
        expect(validaLogin({nick:"",pass:""}))
        .to.deep.equal(
            {
                error: true,
                missatge: "Aquest usuari no existeix"
            }
        )
    })
    it("si el usuario no existe", ()=>{
        expect(validaLogin({nick:"ab",pass:""}))
        .to.deep.equal(
            {
                error: true,
                missatge: "Aquest usuari no existeix"
            }
        )
    })
    it("si el usuario existe y la contraseña no coincide", ()=>{
        expect(validaLogin({nick:"carlos",pass:"1"}))
        .to.deep.equal(
            {
                error: true,
                missatge: "Contrasenya incorrecta"
            }
        )
    })
    it("Logeado con exito", ()=>{
        expect(validaLogin({nick:"carlos",pass:"1234"}))
        .to.deep.equal(
            {
                error: false,
                missatge: "Hola carlos"
            }
        )
    })
})

