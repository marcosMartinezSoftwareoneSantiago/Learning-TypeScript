"use strict";
/* Crea un proyecto con typescript en el que declares un array que almacene valores de
            nombres de personas. Recorre en un bucle el array e imprímelo en el navegador a través
            de una lista desordenada. */
let nombrePersonas = [
    "Luis",
    "Laura",
    "Lorenzo"
];
document.write("<ul>");
nombrePersonas.forEach(persona => {
    document.write(`<li>${persona}</li>`);
});
document.write("</ul>");
