let names:string[] = ["Carlos", "Helena", "Samuel"];

escribirArrayCompleto();
borrarUnElemento();

function escribirArrayCompleto():void{
    let texto:string = nombresCompletos();
    texto += "<button type='submit' id='borrar'>Borrar un elemento</button>";
    document.write(texto);
}

function borrarUnElemento():void{
    const boton:HTMLButtonElement = document.querySelector('#borrar')!;

    boton.addEventListener("submit", () => {
        names.pop();
        escribirArrayCompleto();
    })
}


function nombresCompletos():string{
    let codigo:string = '<ul>'
    names.forEach(name => {
        codigo+=`<li>${name}</li>`;
    });
    codigo += '</ul>';
    return codigo;
}