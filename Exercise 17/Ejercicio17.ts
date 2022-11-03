interface ITaller{
    cantidad:number;
    diametro:number;
    peso:number;
    imprimirPieza(pieza:ITaller):void;
};

class RuedaGrande implements ITaller{
    cantidad = 2;
    diametro = 19.7;
    peso = 8.14;
    imprimirPieza(pieza: ITaller): void {
        console.log("Cantidad: " + pieza.cantidad);
        console.log("Diametro: " + pieza.diametro);
        console.log("Peso: " + pieza.peso);
    }

}

let myRuedaGrande:RuedaGrande = new RuedaGrande();

myRuedaGrande.imprimirPieza(myRuedaGrande);