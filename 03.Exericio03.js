/*
3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.
*/
const prompt = require("prompt-sync")();

//Declaração de variáveis e arrays
let userInput = 0;
let finalResult = 0;

//Declaração de funções
function stringArray(tex){
    let words = 0;
    words = tex.split(" ");    //Separa cada palavra em um indece de um novo array
    let finalArray = [];       //Array que recebera apenas as palavras unicas

    for(let i = 0; i < words.length; i++){          //Explicação: o for serve para percorrer os indeces do vector(array das palavras).
        if(finalArray.includes(words[i])){          //O includes do trecho "FinalArray.includes(vector[i])", retorna valor booleano então , 
            continue;                               // é necessario o ! no começo do if, para inverter a lógico do includes
        }else{
            finalArray.push(words[i]);
        }
    }
    
    return finalArray;
}

//Corpo principal
console.log("Algoritmo para extrair todos as palavras únicas de uma String.");

//Entrada de dados
userInput = "Olá mundo Olá Olá mundo mundo no +Prati +Prati";
// userInput = prompt("Digite o texto que quiser ");     //<--Caso queria coletar os dados manualmente


//saída de dados
finalResult = stringArray(userInput);
console.table( finalResult);