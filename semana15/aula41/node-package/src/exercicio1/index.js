// EXERCÍCIO 01 //

/*
    a)  Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
<<<<<<< HEAD
        -Os parâmetros acessados utiliza-se o process.argv. 
        -No process.argv é colocado a posição do parâmetro.

=======
        Em relação ao process.argv, este é utilizado para acessar os parâmetros utilizados.
        É nele que deve conter a posição do parâmetro a ser utilizado.
        No terminal chamamos node nome-do-arquivo argumento ou npm nome-do-script argumento.
>>>>>>> 849ffdca654457c01b9112df0a8871ff00ccd980
    */

/*
    b) Crie um programa que receba seu nome e sua idade. 
    Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

    "Olá, (Nome)! Você tem (sua idade) anos."


        const userInfo = require("./userInfo.js") 
<<<<<<< HEAD
        const name = process.argv[2]
        const age = process.argv[3]

=======

        const name = process.argv[2]

        const age = process.argv[3]


>>>>>>> 849ffdca654457c01b9112df0a8871ff00ccd980
        console.log(`Olá, ${name}! Você tem ${age} anos.`);
    */

/*
    c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

    "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

    */

<<<<<<< HEAD
const userInfo = require("../../src/user-info.js");
const name = process.argv[2];
const age = process.argv[3];
=======
const userInfo = require("../user-info");
const colors = require("colors");

const name = process.argv[2];
const age = process.argv[3];

>>>>>>> 849ffdca654457c01b9112df0a8871ff00ccd980
const ageInSevenYears = Number(age) + 7;

console.log(
  `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${ageInSevenYears}`
<<<<<<< HEAD
=======
    .rainbow
>>>>>>> 849ffdca654457c01b9112df0a8871ff00ccd980
);
