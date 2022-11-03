"use strict";
let names = ["Carlos", "Helena", "Samuel"];
escribirArrayCompleto();
borrarUnElemento();
function escribirArrayCompleto() {
    let texto = nombresCompletos();
    texto += "<button type='submit' id='borrar'>Borrar un elemento</button>";
    document.write(texto);
}
function borrarUnElemento() {
    const boton = document.querySelector('#borrar');
    boton.addEventListener("submit", () => {
        names.pop();
        escribirArrayCompleto();
    });
}
function nombresCompletos() {
    let codigo = '<ul>';
    names.forEach(name => {
        codigo += `<li>${name}</li>`;
    });
    codigo += '</ul>';
    return codigo;
}
