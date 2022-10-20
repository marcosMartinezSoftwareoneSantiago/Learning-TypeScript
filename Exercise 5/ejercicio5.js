"use strict";
var coloresEnMayusculas;
(function (coloresEnMayusculas) {
    coloresEnMayusculas[coloresEnMayusculas["BLANCO"] = 0] = "BLANCO";
    coloresEnMayusculas[coloresEnMayusculas["NEGRO"] = 1] = "NEGRO";
    coloresEnMayusculas[coloresEnMayusculas["ROJO"] = 2] = "ROJO";
})(coloresEnMayusculas || (coloresEnMayusculas = {}));
;
let arrayDeObjetos;
arrayDeObjetos = [
    {
        preferencias: coloresEnMayusculas.ROJO,
        nombre: 32487
    },
    {
        preferencias: coloresEnMayusculas.NEGRO,
        nombre: 'paco'
    }
];
document.write("<ul>");
arrayDeObjetos.forEach(element => {
    document.write("<li>" + element.preferencias + "</li>");
    document.write("<li>" + element.nombre + "</li>");
});
document.write("</ul>");
