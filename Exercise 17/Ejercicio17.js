"use strict";
;
class RuedaGrande {
    constructor() {
        this.cantidad = 2;
        this.diametro = 19.7;
        this.peso = 8.14;
    }
    imprimirPieza(pieza) {
        console.log("Cantidad: " + pieza.cantidad);
        console.log("Diametro: " + pieza.diametro);
        console.log("Peso: " + pieza.peso);
    }
}
let myRuedaGrande = new RuedaGrande();
myRuedaGrande.imprimirPieza(myRuedaGrande);
