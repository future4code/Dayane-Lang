// EXERCÍCIO 01 //

/*
    a)  Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
        -Os parâmetros acessados utiliza-se o process.argv. 
        -No process.argv é colocado a posição do parâmetro.

    */

/*
    b) Crie um programa que receba seu nome e sua idade. 
    Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

    "Olá, (Nome)! Você tem (sua idade) anos."


        const userInfo = require("./userInfo.js") 
        const name = process.argv[2]
        const age = process.argv[3]

        console.log(`Olá, ${name}! Você tem ${age} anos.`);
    */

/*
    c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

    "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

    */

const userInfo = require("../../src/user-info.js");
const name = process.argv[2];
const age = process.argv[3];
const ageInSevenYears = Number(age) + 7;

console.log(
  `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${ageInSevenYears}`
);
