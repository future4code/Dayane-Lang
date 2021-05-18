//EXERCÍCIO 1

/*
a) Crie uma variável minhaString do tipo string e atribua um valor a ela. 
Tente atribuir um número a esta variável. O que acontece? 


const minhaString : string = "Bonjour!"  //Apresentou na terminal o valor atribuído.

//const minhaString : string = 15  //Apresentou na terminal um erro de atribuição de valor cujo era diferente do tipo requerido.
console.log(minhaString)




/*
b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. 
Como podemos fazer para que essa variável também aceite strings?
*/

//const meuNumero : number = 13 //o valor apresentado no terminal foi aceito pelo valor atribuído.
const meuNumero : number | string = 13 // o valor apresentado no terminal também foi aceito pelo valor atribuído.
//console.log(meuNumero)


/*
c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
`nome`, que é uma string;
`idade`, que é um número;
`corFavorita`, que é uma string.
Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
*/

const pessoa: {nome: string, idade: number, corFavorita: string} = {
    nome: "Dayane",
    idade: 35,
    corFavorita: "violeta"
}
//console.table(pessoa)


/*
d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. 
Utilize um enum para isso.
*/

enum corArcoIris {
VERMELHO = "vermelho",
AMARELO = "amarelo",
VERDE = "verde",
LARANJA = "laranja",
AZUL = "azul",
ROSA = "rosa"
}

type pessoa= {nome: string, idade: number, corFavorita: corArcoIris} 

const alice: pessoa = {
    nome: "Alice",
    idade: 5,
    corFavorita: corArcoIris.ROSA
}

const mingau: pessoa = {
    nome: "Mingau",
    idade: 12,
    corFavorita: corArcoIris.VERMELHO
}

//console.log (alice, corArcoIris)

