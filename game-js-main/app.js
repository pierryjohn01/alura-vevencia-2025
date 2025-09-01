alert("Boas vindas ao jogo do numero secreto!");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(MathRandon() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt("escolha um numero entre 1 e 100");

    if(chute == numeroSecreto ) {
        break;
    }
    else{
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        }
        else{
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

//if (tentativas > 1){
//alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
//}
//else{
    //alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}