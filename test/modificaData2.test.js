import { assert } from "chai"
import { modificaData2 } from "../src/js/funciones/modificaData2.js"

describe('Funcion modificaData2', ()=>{
    it("Recibe un objeto con fecha 2022-10-26 y devuelve: 2022/10/26 00:00:00", ()=>{
        assert.equal(modificaData2(new Date('2022-10-26 00:00:00')), '2022/10/26 00:00:00')
    })
    it("Recibe un objeto con fecha 2022-1-26 y devuelve: 2022/01/26 00:00:00", ()=>{
        assert.equal(modificaData2(new Date('2022-1-26 00:00:00')), '2022/01/26 00:00:00')
    })
    it("Recibe un objeto con fecha 2022-1-6 y devuelve: 2022/01/06 00:00:00", ()=>{
        assert.equal(modificaData2(new Date('2022-1-6 00:00:00')), '2022/01/06 00:00:00')
    })
})