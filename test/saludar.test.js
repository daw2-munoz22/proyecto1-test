import { assert } from "chai";

import { saludar } from "../src/js/funciones/saludar.js"

describe('Funcion saludar', ()=>{
    it('Espero Hola Edgar si le paso Edgar', ()=>{
        assert.equal(saludar("Edgar"), "Hola Edgar")
    })
})