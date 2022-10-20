const formularioIntroduccion:HTMLFormElement = document.querySelector('form')!;
const textoIntroducido:HTMLInputElement = document.querySelector('#introducir')!;
let nombres:string[];

formularioIntroduccion.addEventListener("submit", ()=>{
    let nuevoNombre:string = textoIntroducido.value;

    if((nombres == null || nombres.length <= 3)){
        nombres.push(nuevoNombre);
    }else{
        aviso();
    }

})

function aviso() {
    let mostrarNombres:boolean = confirm("Ya ha agregado tres nombres");
    if(mostrarNombres){
        console.log(nombres);
    }
}
