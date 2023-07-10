let iNumero = document.querySelector("#numero");
let liAleatorio = document.querySelector("#aleatorio");
let liResultado = document.querySelector("#resultado");


iNumero.addEventListener("input", function(){
    let c = 0;
    for(;iNumero.value != liAleatorio.innerHTML;c++){
        liAleatorio.innerHTML = Math.floor((Math.random() * 10) +1); 
        console.log(liAleatorio.innerHTML)
    }
    liResultado.innerHTML = "Acertou o número em " + c + "tentativas";
});