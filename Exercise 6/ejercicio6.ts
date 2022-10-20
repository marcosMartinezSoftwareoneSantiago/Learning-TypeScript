let suNombre:string = "";
let suApellido:string = "";
let suEmail:string = "";


let elNombre = window.prompt("Escribe tu nombre aquí");
let elApellido = window.prompt("Escribe tu primer apellido aquí");
let elEmail = window.prompt("Escribe aquí tu Emilio aquí");


if(elNombre != null){
    suNombre = elNombre;
}

if(elApellido != null){
    suApellido = elApellido;
}

if(elEmail != null){
    suEmail = elEmail;
}

document.write("<p>" + suNombre, suApellido,suEmail + "</p>");