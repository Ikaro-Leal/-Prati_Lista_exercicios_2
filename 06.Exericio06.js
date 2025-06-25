/*
6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações
*/
const prompt = require("prompt-sync")();

//Declaração de variáveis e arrays


//Declaração de funções
function memoize(fn) {
    let cache = {};                                  //Armazenara os resultados.


    return function (...args) {
        let chave = JSON.stringify(args);            //Transforma o args em 1 string, unica para ser utilizado como uma chave

        //Verifica se o valor já existe dentro do cache
        let pesquisaCache = cache[chave];

        if (pesquisaCache != undefined) {
            console.log("Sai do cache para os argumentos:", args);
            return pesquisaCache;
        }

        //Caso não exista dentro do cahce
        let resultado = fn(...args);
        cache[chave] = resultado;

        console.log("Calculando resultado e guardando dentro do cache:", args);
        return resultado;
    }


}

function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);
}





//Corpo principal
console.log("Programa que utiliza um cache, que retorna resultados instantâneos em caso de já exister esse valor em seu cache.");

//Entrada de dados
// Criando função memoizada
let fatorialMemo = memoize(fatorial);

//saída de dados
console.log(fatorialMemo(5)); // Calcula
console.log(fatorialMemo(5)); // Usa  o cache
console.log(fatorialMemo(6)); // Calcula novo
console.log(fatorialMemo(6)); // utiliza o cache