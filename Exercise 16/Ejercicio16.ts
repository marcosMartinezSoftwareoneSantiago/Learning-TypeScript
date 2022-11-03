let names:string[] = ["Carlos", "Helena", "Samuel"];
const primerDiv:HTMLDivElement = document.querySelector('#primer')!;
const segundoDiv:HTMLDivElement = document.querySelector('#segundo')!;
const boton:HTMLButtonElement = document.querySelector('#borrar')!;

escribirArrayCompleto(primerDiv);

boton.addEventListener("click", () => {
    names.pop();
    escribirArrayCompleto(segundoDiv);
})

function escribirArrayCompleto(div:HTMLDivElement):void{
    let texto:string = nombresCompletos();
    div.innerHTML=texto;
}

function nombresCompletos():string{
    let codigo:string = '<ul>';
    names.forEach(name => {
        codigo+=`<li>${name}</li>`;
    });
    codigo += '</ul>';
    return codigo;
}