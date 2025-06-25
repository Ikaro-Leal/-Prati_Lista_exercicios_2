/*
4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1.
*/
const prompt = require("prompt-sync")();

//Declaração de variáveis
let inputNumber = 0;
let factorialResult = 0;

//Declaração de funções
function fatorial(n) {
    if (n === 0) { return 1; }
    if (n < 0) {throw new Error("ERRO! número menor que zero.");}

    return n * fatorial(n - 1);
}

//Corpo principal
console.log(`Programa para descobrir o fatorial de um número`);

//Entrada de dados
inputNumber = Number(prompt(`Digite um valor para descobrir sua fatorial: `));

//saída de dados
factorialResult = fatorial(inputNumber);

if (factorialResult === 1) { console.log("O fatorial é igual a 1."); }
else { console.log(`O fatorial de ${inputNumber} é igual a ${factorialResult}.`); }