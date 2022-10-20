type device = "mobile" | "desktop" | "laptop";

let personas:[
    {
        username:string,
        email:string,
        device:device
    },
    {
        username:string,
        email:string,
        device:device
    }
] = [
    {
        username:'Paco',
        email:"Paco@gmail.com",
        device: 'mobile'
    },
    {
        username:"Luis",
        email:"Luis@gmail.com",
        device:"laptop"
    }
];

function imprimirPersonas(){
    personas.forEach(persona => {
        document.write("Persona:<br>");
        document.write(`username: ${persona.username}<br>`)
        document.write(`email: ${persona.email}<br>`)
        document.write(`device: ${persona.device}<br>`)
        document.write(`<br>`)

    })
}
imprimirPersonas();