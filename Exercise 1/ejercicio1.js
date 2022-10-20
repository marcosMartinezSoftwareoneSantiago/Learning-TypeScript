"use strict";
/* Crea un proyecto con typescript en el que declares dos variables, una para almacenar
una cadena de texto y otra para almacenar un número con decimales. Inicializa las
variables con algún tipo de valor. Si el número es mayor o igual a 10 imprime por las
consola “El número es mayor o igual a 10” , caso contrario, “El número es menor de
10”. Utiliza para ello el operador condicional ternario. */
let mensaje = "El número es ";
let miNumero = 8.4;
console.log((miNumero >= 10) ? (mensaje + "mayor o igual a 10") : (mensaje + "menor de 10"));
