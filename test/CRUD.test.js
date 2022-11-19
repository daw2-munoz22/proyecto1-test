import { usuari } from "../src/js/funciones/usuari.js";
import { expect } from "chai";
describe("Función usuari", ()=>{
 
    describe("get", ()=>{
       
        it("recibe usuario 'carlos' (que está en bd) y devuelve los datos del usuario", ()=>{
           
            expect(usuari.get('carlos'))
            .to.deep.equal({
                error: false,
                usuari: {
                    nick:"carlos",
                    pass: "1234",
                    avatar: "avatar1.png",
                    punts: 0,
                    dataRegistre: '2022/10/10',
                    dataNeixement: '1973/04/13'
                }
 
            })
        })
        it("recibe usuario 'noestoy' (que no está en bd) y devuelve mensaje de error", ()=>{
           
            expect(usuari.get('noestoy'))
            .to.deep.equal({
                error: true,
                missatge: "L'usuari no existeix",
            })
        })
    })
 
    describe("update", ()=>{
       
        it("recibe usuario 'carlos' (que está en bd) y devuelve los datos del usuario actualizado", ()=>{
           
            expect(usuari.update({
                nick: 'carlos',
                pass: '1234',
                avatar: 'avatar1.png',
                dataNeixement: '2000/10/10'
            }))
            .to.deep.equal({
                error: false,
                missatge: "Dades actualitzades",
                usuari: {
                    nick: 'carlos',
                    pass: '1234',
                    avatar: 'avatar1.png',
                    dataNeixement: '2000/10/10'
                }
 
            })
        })
        it("recibe usuario 'noestoy' (que no está en bd) y devuelve mensaje de error", ()=>{
           
            expect(usuari.update({
                nick: 'noestoy',
                pass: '1234',
                avatar: 'avatar1.png',
                dataNeixement: '2000/10/10'
            }))
            .to.deep.equal({
                error: true,
                missatge: "L'usuari no existeix",
            })
        })
 
        it("recibe usuario 'carlos' (que está en bd) con campos vacíos y devuelve los datos del usuario con los campos sin actualizar", ()=>{
           
            expect(usuari.update({
                nick: 'carlos',
                pass: '',
                avatar: '',
                dataNeixement: ''
            }))
            .to.deep.equal({
                error: false,
                missatge: "Dades actualitzades",
                usuari: {
                    nick: 'carlos',
                    pass: '1234',
                    avatar: 'avatar1.png',
                    dataNeixement: '2000/10/10'
                }
 
            })
        })
    })
 
    describe("delete", ()=>{
       
        it("recibe usuario 'pepe' (que está en bd) y devuelve los datos del usuario borrado y un mensaje", ()=>{
           
            expect(usuari.delete('pepe'))
            .to.deep.equal({
                error: false,
                missatge: "L'usuari pepe s'ha esborrat de la base de dades",
                usuari: {
                    nick:"pepe",
                    pass: "0000",
                    avatar: "avatar2.png",
                    punts: 0,
                    dataRegistre: '2022/10/09',
                    dataNeixement: '1975/10/01'
                }
 
            })
        })
       
        it("recibe usuario 'noestoy' (que no está en bd) y devuelve mensaje de error", ()=>{
           
            expect(usuari.delete('noestoy'))
            .to.deep.equal({
                error: true,
                missatge: "L'usuari no existeix",
            })
        })
    })
})
