"use strict";
let names = ["Carlos", "Helena", "Samuel"];
const primerDiv = document.querySelector('#primer');
const segundoDiv = document.querySelector('#segundo');
const boton = document.querySelector('#borrar');
escribirArrayCompleto(primerDiv);
boton.addEventListener("click", () => {
    names.pop();
    escribirArrayCompleto(segundoDiv);
});
function escribirArrayCompleto(div) {
    let texto = nombresCompletos();
    div.innerHTML = texto;
}
function nombresCompletos() {
    let codigo = '<ul>';
    names.forEach(name => {
        codigo += `<li>${name}</li>`;
    });
    codigo += '</ul>';
    return codigo;
}
