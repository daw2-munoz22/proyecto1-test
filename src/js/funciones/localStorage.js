import { dades } from "./dades.js"
export const ls = {
    setDades: (dades)=>{
        localStorage.setItem('tetris_dades', JSON.stringify(dades));
        return true;
    },
    getDades: ()=>{
        return JSON.parse(localStorage.getItem('tetris_dades')) || []
    },
    getUsuariLogin: ()=>{
        return localStorage.getItem('tetris_usuariLogin');
    },
    setUsuariLogin: (nick)=>{
        return localStorage.setItem('tetris_usuariLogin', JSON.stringify(nick));
    }
}