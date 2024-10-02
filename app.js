alert("Boas-vindas ao jogo do numero secreto");
let numeroSecreto = 34;
let chute;
let tentativas =20;

while ( chute != numeroSecreto){
    chute =prompt("Escolha um número entre 1 e 50");

if(chute == numeroSecreto){
    consol.log(`Isso aí!! Você descobriu o número secreto ${numerosecreto}`);
}
else{
    if(numeroSecreto> chute){
        alert(`o número secreto é maior que ${chute}`)
    } else{
        alert(`O número secreto é menor que ${chute}`)
    }
}
}