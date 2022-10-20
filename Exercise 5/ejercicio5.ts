enum coloresEnMayusculas{ 'BLANCO','NEGRO','ROJO'};

let arrayDeObjetos:[
    {
        preferencias:coloresEnMayusculas,
        nombre:any
    },
    {
        preferencias:coloresEnMayusculas,
        nombre:string
    }
];

arrayDeObjetos = [
    {
    preferencias: coloresEnMayusculas.ROJO,
    nombre: 32487
    },
    {
        preferencias: coloresEnMayusculas.NEGRO,
        nombre: 'paco'
    }
]

document.write("<ul>");
arrayDeObjetos.forEach(element => {
    document.write("<li>" + element.preferencias + "</li>");
    document.write("<li>" + element.nombre + "</li>");
});
document.write("</ul>");
