/*
2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
*/

const prompt = require("prompt-sync")();

//Declaração de variáveis
let inputNumber = 0;
let password = Math.floor(Math.random() * 100) + 1;
let counter = 0;


//Corpo principal
console.log(`Programa com uma senha secreta. Descobra a senha.`);
//console.log(password) // depuração

//Entrada de dados
while (true) {
    inputNumber = Number(prompt("Digite um número até descobrir a senha: "));

    //Sai do loop infinito
    if (inputNumber == password) {
        break;
    }

    //Ajuda para descobrir a senha
    if (inputNumber > password) {
        console.log("A senha está mais abaixo.");
        counter++
    } else {
        console.log("A senha está mais acima.");
        counter++
    }

}


//saída de dados
if (counter == 0) { console.log(`Você descobriu a senha, que era ${password}, na primeira tentativa!`); }
else { console.log(`Você descobriu a senha, que era ${password}, após ${counter} tentativas.`); }