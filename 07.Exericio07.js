/*
7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, …], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.
*/
const prompt = require("prompt-sync")();

//Declaração de variáveis e arrays
const products = [
    { id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, quantidade: 1 },
    { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, quantidade: 3 },
    { id: 3, nome: "Smart TV LG 55;", preco: 2799.00, quantidade: 5 },
    { id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, quantidade: 2 },
    { id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, quantidade: 1 },
    { id: 6, nome: "Tablet iPad Air", preco: 4199.00, quantidade: 8 },
    { id: 7, nome: "Console PlayStation 5", preco: 4699.00, quantidade: 2 },
    { id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, quantidade: 7 },
    { id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, quantidade: 5 },
    { id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, quantidade: 3 }
];

//Declaração de funções
function sortedArray(pro) {
    //CASO1
    const proCopy = [...pro];
    //FIM CASO 1

    //CASO 2
    // const proCopy = [];

    // for(valores of pro){
    //     proCopy.push(valores);
    // }
    //FIM CASO 2

    proCopy.sort((a,b)=> a.preco - b.preco);

    let newProducts = proCopy.map((elementos)=>{
        return elementos.nome;
    })

    return newProducts;
}

//Corpo principal
console.log("retorne um novo array apenas com os nomes, ordenados por preço crescente.");


//Entrada de dados
let finalResult = sortedArray(products);

//saída de dados
console.table(finalResult);