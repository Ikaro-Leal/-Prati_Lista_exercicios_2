/*
1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.
*/
const prompt = require("prompt-sync")();

//Declaração de variáveis
const data = new Date();
let day = 0;
let month = 0;
let year = 0;
let result = 0;

//Declaração de funções
function ehDataValida(dia, mes, ano) {
    //Verifica se tem algum número muito fora de padrão
    if ((dia < 1) || (mes < 1) || (mes > 12)) {
        return false;
    }

    //Define o limete de dias que cada mês(index 0, representa Janeiro e o index 11 representa dezembro)
    let monthLimit = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //Calculo para saber se o ano é comum ou bissexto
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        monthLimit[1] += 1
    }

    //Validador para saber se Input dia, passou do limete de dias do respectivo mês
    if (dia > monthLimit[mes - 1]) {
        return false;
    }

    //Caso todo esteja correto retorna true
    return true;
}


//Corpo principal
console.log("Formatador de datas:")

//Entrada de dados
day = Number(prompt("Digite o dia: "));
month = Number(prompt("Digite o mês: "));
year = Number(prompt("Digite o ano: "));

//saída de dados
result = ehDataValida(day, month, year)

if (result == false) {
    console.log("erro ,data invalida.");
} else {
    console.log(`Data válida: ${day}/${month}/${year}`);
}
