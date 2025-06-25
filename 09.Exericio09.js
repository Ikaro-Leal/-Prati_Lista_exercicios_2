/*
9. Conversão Entre Formatos
Escreva duas funções:
○ paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], … ] e retorna o objeto equivalente.
○ objetoParaPares(obj) faz o inverso, retornando um array de
pares.
*/
const prompt = require("prompt-sync")();

//Declaração de variáveis e arrays
let objeto = {
    nome: 'João',
    idade: 10,
    sexo: 'Masculino'
}

let array = [
    ['continente', 'Asia'],
    ['pais', 'Vietman'],
    ['capital', 'Hanoi']
]

//Declaração de funções
function transmutationArray(obj) {
    let newArray = [];

        
    for (let j in obj) {             // O "j" inicial é a chave(nome,idade,sexo). o obj[j], representa 
        newArray.push([j, obj[j]])   //os valores do vetor, ou seja, ele vai percorrer e adicionar os valores do vetor
    }

    return newArray;
}

function transmutationObject(vector) {
    let newObject = {};

    for (let i of vector) {           // O "i" representa cada par(chave-valor), de cada interação do array(vector).
        newObject[i[0]] = i[1];       // O i[0] representa o 1º elemento, que é a chave.
    }                                 // O i[1] representa o valor da chave(i[0]).

    return newObject;
}


//Corpo principal
console.log("Programa que fará Transmutação de Estruturas de Dados. Um objeto, vai retornar um array, um array vai retorna um objeto.");

//Entrada de dados
let result1 = transmutationArray(objeto);
let result2 = transmutationObject(array);

//saída de dados
console.log(result1);
console.log(result2);
