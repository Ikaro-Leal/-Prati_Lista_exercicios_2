/*
8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.
*/
const prompt = require("prompt-sync")();

//Declaração de variáveis e arrays
let sales = [
    { cliente: "Maria", total: 1500 },
    { cliente: "Armando", total: 2000 },
    { cliente: "Maria", total: 500 },
    { cliente: "João", total: 1200 },
    { cliente: "Ana", total: 2000 },
    { cliente: "João", total: 800 }
];

//Declaração de funções
function newSales(vector) {

    let result = vector.reduce((acumulador, elemento) => {

        let cli = elemento.cliente;            //captura os os dados do elemento
        let tot = elemento.total;             //captura os os dados do elemento

        if (acumulador[cli]) {               //Verifica se o objeto acumulador possui um nome igual
            acumulador[cli] += tot;
        } else {
            acumulador[cli] = tot;
        }

        return acumulador;

    }, {})              //  O `{}` Ele serve como valor inicial para o acumulador

    return result;
}

//Corpo principal
console.log("Um programa que ira agrupar os dados por cliente, e para cada cliente, somar o total de todas as transações desse cliente");

//Entrada de dados
let finalResult = newSales(sales);

//saída de dados
console.table(finalResult);
