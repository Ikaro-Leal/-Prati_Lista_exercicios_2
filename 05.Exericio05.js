/*
5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.
*/
const prompt = require("prompt-sync")();

//Declaração de variáveis e arrays


//Declaração de funções
function debounce(fn,deplay){          //A debounce é como um frabrica
    let tempo;                         // Serve para armazenar o tempo

    return function(...args){          //Faz delay da função
        clearTimeout(tempo);           //Limpa o timer, caso precise

        tempo = setTimeout(()=>{       //Cria um timer, que também chama a função depois do delay
            fn(...args);       
        }, deplay);

    }
}

function mensagem(){
    console.log("Função executada.");        
}

let mensagemDelay = debounce(mensagem, 1000);  //Criando através da fabrica, a função mesagem, com 1 seg de delay

//Corpo principal
console.log(('Programa "DEBOUNCE". Que trabalha com higher-order functions(HOFs).'));

//Entrada de dados

//saída de dados
mensagemDelay();
mensagemDelay();
mensagemDelay();
mensagemDelay(); 
mensagemDelay(); 
mensagemDelay();      // Somente aqui ela vai ser executada.    
