import { ls } from "./src/js/funciones/localStorage.js"
import { dades } from "./src/js/funciones/dades.js"
import { saludar } from "./src/js/funciones/saludar.js"

document.querySelector('#app').innerHTML = saludar("Edgar")

ls.setDades(dades);
ls.getDades(dades);
ls.getUsuariLogin("carlos")