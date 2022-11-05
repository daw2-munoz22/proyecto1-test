import { assert } from "chai"
import { modificaData } from "../src/js/funciones/modificaData.js"
describe("Función modificaData", ()=>{
    it("Recibe un objeto con fecha 2022-10-26 y devuelve: 26 Octubre 2022", ()=>{
        assert.equal(modificaData(new Date('2022-10-26 00:00:00')), '26 Octubre -  2022 00:00:00')
    })
    it("Recibe un objeto con fecha 2022-1-26 y devuelve: 26 Enero 2022", ()=>{
        assert.equal(modificaData(new Date('2022-1-26 00:00:00')), '26 Enero -  2022 00:00:00')
    })
})
