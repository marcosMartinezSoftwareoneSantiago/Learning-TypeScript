"use strict";
let sueldo = Number(window.prompt("Introduce tu sueldo bruto"));
let irpf = Number(window.prompt("Introduce tu retención del IRPF"));
let ss = Number(window.prompt("Introduce los descuentos de la Seguridad Social"));
function calculo() {
    let salario = sueldo - irpf - ss;
    return salario;
}
let salario = calculo();
document.write(`<p>Tu salario es ${salario}</p>`);
