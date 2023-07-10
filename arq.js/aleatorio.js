let pNome = document.getElementById("nome");
pNome.innerHTML = "Inf 4M";

let liAleatorio = document.querySelector("#aleatorio");

let inputNumero = document.getElementById("numero");
let liResultado = document.querySelector("#resultado");   

inputNumero.addEventListener ("input", 
    function(){
        liAleatorio.innerHTML = Math.floor((Math.random() * 10) +1); 

        if(inputNumero.value < liAleatorio.innerHTML){
            liResultado.innerHTML = "Número sorteado é maior" 
        }else if(inputNumero.value > liAleatorio.innerHTML){
            liResultado.innerHTML = "Número sorteado é menor"
        }else{
            liResultado.innerHTML = "Parabéns, número é igual ao sorteado";
        }
    }
);