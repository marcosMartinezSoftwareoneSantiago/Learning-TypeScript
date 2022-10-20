"use strict";
const formularioIntroduccion = document.querySelector('form');
const textoIntroducido = document.querySelector('#introducir');
let nombres;
formularioIntroduccion.addEventListener("submit", () => {
    let nuevoNombre = textoIntroducido.value;
    if ((nombres == null || nombres.length <= 3)) {
        nombres.push(nuevoNombre);
    }
    else {
        aviso();
    }
});
function aviso() {
    let mostrarNombres = confirm("Ya ha agregado tres nombres");
    if (mostrarNombres) {
        console.log(nombres);
    }
}
