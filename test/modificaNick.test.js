import { assert } from "chai"
import { modificaNick } from "../src/js/funciones/modificaNick.js"
describe('Test de la funcion modificaNick', ()=>{
    it('Espero que el nombre se cambie si le pongo espacios', ()=>{
        assert.equal(modificaNick(" Mi nombre chuleta "), "MI_NOMBRE_CHULETA")
    })
    it('Recibe "paco pera" y devuelve PACO_PERA', ()=>{
        assert.equal(modificaNick("Eduardo Pi"), "EDUARDO_PI")
    })
    it('Recibe "Edu Pi pA" y devuelve EDU_PI_PA', ()=>{
        assert.equal(modificaNick("Edu Pi pA"), "EDU_PI_PA")
    })
})