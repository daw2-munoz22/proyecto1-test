import { expect } from "chai";
import { validaNouUsuari } from "../src/js/funciones/validaNouUsuari.js";
describe("Función validaNouusuari ...", ()=>{
   
    it("si el usuario tiene menos de 3 letras o más de 10", ()=>{
        expect(validaNouUsuari({nick:"ab",pass:""}))
        .to.deep.equal(
            {
                error: true,
                missatge: "El nick no és correcte"
            }
        )
    })
    it("si el usuario tiene mas de 10 letras", ()=>{
        expect(validaNouUsuari({nick:"12345678912", pass:""}))
        .to.deep.equal(
            {
                error: true,
                missatge: "El nick no és correcte"
            }
        )
    })
   
    it("si usuario es correcto pero no escribe la contraseña", ()=>{
        expect(validaNouUsuari({nick:"1234",pass:""}))
        .to.deep.equal(
            {
                error: true,
                missatge: "La contrasenya no és correcte"
            }
        )
    })
 
    it("si usuario es correcto pero pass es menor que 3", ()=>{
        expect(validaNouUsuari({nick:"1234",pass:"1"}))
        .to.deep.equal(
            {
                error: true,
                missatge: "La contrasenya no és correcte"
            }
        )
    })
 
    it("si usuario es correcto pero pass es mayor que 10", ()=>{
        expect(validaNouUsuari({nick:"1234",pass:"12345678912"}))
        .to.deep.equal(
            {
                error: true,
                missatge: "La contrasenya no és correcte"
            }
        )
    })
 
    it("si usuario y contraseña son correctos pero está en la base de datos", ()=>{
        expect(validaNouUsuari({nick:"carlos",pass:"1234"}))
        .to.deep.equal(
            {
                error: true,
                missatge: "Aquest usuari ja existeix"
            }
        )
    })
   
    it("si usuario y contraseña son correctos y no está en la base de datos", ()=>{
        expect(validaNouUsuari({nick:"manolo",pass:"1234"}))
        .to.deep.equal(
            {
                error: false,
                missatge: `L’usuari amb nick: manolo s’ha creat correctament`
            }
        )
    })
})
