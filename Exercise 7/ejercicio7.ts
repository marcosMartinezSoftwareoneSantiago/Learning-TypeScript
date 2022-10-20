let sueldo:number = Number (window.prompt("Introduce tu sueldo bruto"));
let irpf:number = Number (window.prompt("Introduce tu retención del IRPF"));
let ss:number  = Number (window.prompt("Introduce los descuentos de la Seguridad Social"));

function calculo(){
    let salario:number = sueldo -irpf -ss;
    return salario;
}
let salario:number = calculo();

document.write(`<p>Tu salario es ${salario}</p>`)