const formularioIntroduccion:HTMLFormElement = document.querySelector('form')!;
const textoIntroducido:HTMLInputElement = document.querySelector('#introducir')!;
let nombres:string[] = [''];

formularioIntroduccion.addEventListener("submit", ()=>{
    let nuevoNombre:string = textoIntroducido.value;
    let dimensionNombres = nombres.push(nuevoNombre);

    if(dimensionNombres > 3){
        aviso();
    }

})

function aviso() {
    let mostrarNombres:boolean = confirm("Ya ha agregado tres nombres");
    if(mostrarNombres){
        console.log(nombres);
    }
}
