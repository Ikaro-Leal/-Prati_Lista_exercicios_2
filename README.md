## Lista de exercícios 2
---

O projeto deste repositório contém a resolução de diversos exercícios de lógica de programação em JavaScript desenvolvidos pelo Professor Jaques Antunes, do projeto +Prati.

### Pré-requisitos do projeto dos exercícios

Para executar os exercícios do projeto localmente, em seu ambiente, é necessário a realização dos seguintes passos:

> **1.** Instalação do **node.js**, através do link: 
[Download node.js](https://nodejs.org/)
>
>**2.** Instalação de um editor de código, recomendado o **VsCode Studio**, através do link: 
[Download Visual Studio Code](https://code.visualstudio.com/)
>
>**3.** Instalação do **Git**, atráves do link
 [Download para o Git](https://git-scm.com/)

#### Passos para execução

Após instalar o **node.js**,  um **editor de código** e o **Git**, para a execução dos arquivos.js da lista de execícios, é necessario a realização dos seguintes passos:

**1. Clonar o repositório**  
Para clonar o repositório, execute o comando no terminal do Git:

```bash
git clone https://github.com/Ikaro-Leal/-Prati_Lista_exercicios_2
```

<br>

**2.** Acesse a pasta do projeto, atráves do código abaixo:

```bash
cd -Prati_Lista_exercicios_2
```

<br>

**3. Instale as dependências e bibliotecas**.
É necessario a instalação da biblioteca **prompt-sync**, realizando o seguinte comando no terminal do VsCode Studio:

```bash
npm install prompt-sync
```

#### Estrutura dos arquivos

    -Prati_Lista_exercicios_2/
    ├── Exercicio01.js          # Arquivo com o exercício resolvido
    ├── Exercicio09.js          # Arquivo com o exercício até o 09
    ├── README.md               # Instruções de execução
    ├── LICENSE                 # Arquivo com a licença do projeto (MIT)

#### Autor

- **Ikaro França Leal**  
- **Professor, Jaques Antunes**
- **Projeto desenvolvido como parte do curso +PraTI e Codifica.**

#### Lista dos exercícios

**Seção 1: Estruturas de Controle Avançadas**

1. Validação de Datas
    Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
    formarem uma data real (meses de 28–31 dias, ano bissexto para
    fevereiro) e false caso contrário.
    <br>
2. Jogo de Adivinhação
    Escreva um script que gere um número aleatório de 1 a 100 e peça ao
    usuário, para adivinhar. Use while para repetir até acertar, contando
    tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
<br>
    3. Palavras Únicas
    Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
    todas as palavras únicas e exibi-las em um array.
<br>
**Seção 2: Funções e Recursão**

4. Fatorial Recursivo
    Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
    um Error, e n === 0 retornando 1.
<br>
5. Debounce
    Crie function debounce(fn, delay) que receba uma função fn e um delay
    em ms, retornando uma nova função que só executa fn se não for
    chamada novamente dentro do intervalo.
<br>
6. Memoization
    Implemente function memoize(fn) que armazene em cache chamadas
    anteriores de fn (por argumentos), retornando resultados instantâneos em
    repetidas invocações.
**Seção 3: Arrays e Objetos Complexos**
7. Mapeamento e Ordenação
    Dado um array produtos = [{ nome, preco }, …], crie uma função que
    retorne um novo array apenas com os nomes, ordenados por preço
    crescente, usando map, sort.
<br>
    8. Agrupamento por Propriedade
    Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
    cada chave é um cliente e o valor é a soma de todos os seus total.
<br>
    9. Conversão Entre Formatos
    Escreva duas funções:
    ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
    valor], … ] e retorna o objeto equivalente.
    ○ objetoParaPares(obj) faz o inverso, retornando um array de
    pares.