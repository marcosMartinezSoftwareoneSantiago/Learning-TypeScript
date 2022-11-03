"use strict";
const formularioIntroduccion = document.querySelector('form');
const textoIntroducido = document.querySelector('#introducir');
let nombres = [''];
formularioIntroduccion.addEventListener("submit", () => {
    let nuevoNombre = textoIntroducido.value;
    let dimensionNombres = nombres.push(nuevoNombre);
    if (dimensionNombres > 3) {
        aviso();
    }
});
function aviso() {
    let mostrarNombres = confirm("Ya ha agregado tres nombres");
    if (mostrarNombres) {
        console.log(nombres);
    }
}
