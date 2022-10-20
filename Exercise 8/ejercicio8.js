"use strict";
let personas = [
    {
        username: 'Paco',
        email: "Paco@gmail.com",
        device: 'mobile'
    },
    {
        username: "Luis",
        email: "Luis@gmail.com",
        device: "laptop"
    }
];
function imprimirPersonas() {
    personas.forEach(persona => {
        document.write("Persona:<br>");
        document.write(`username: ${persona.username}<br>`);
        document.write(`email: ${persona.email}<br>`);
        document.write(`device: ${persona.device}<br>`);
        document.write(`<br>`);
    });
}
imprimirPersonas();
