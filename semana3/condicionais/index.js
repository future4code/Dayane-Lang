/*//1-Exercício de interpretação

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario) //a- transformou string em número.

if(numero % 2 === 0) {                  //b- se o numero for divisível por 2, mostrará a mensagem que passou no teste.
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")   //c- se o número não for divisível por 2, mostrará a mensagem que não passou no teste.
}

//2-Exercício de interpretação

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":   //a- o programa mostra o preço da fruta digitada, porém se a fruta for digitada diferente do que está no código, ele retorna o valor de 5, por ex.: se escrevo maçã sem acento, ou laranja com todas as letras minuscúlas.
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25  //b- O preço da fruta Maçã é R$ 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break;      // c- se o break for tirado daqui, o programa entende que o valor que deve ser mostrado é o próximo, no caso o 5.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) 

//3-Exercício de interpretação

const numero = Number(prompt("Digite o primeiro número.")) //a- transformou string em number

if(numero > 0) {                               //b- o programa está analisando se o número digitado é maior que zero. 
  console.log("Esse número passou no teste") // c-Digitando -10, deu o seguinte erro:-"Uncaught ReferenceError: mensagem is not defined".
	let mensagem = "Essa mensagem é secreta!!!" //d- essa mensagem não apareceu, eu faria de outra forma. 
                                            //É preciso utilizar ELSE. Não criaria a variável mensagem, já colocaria a mensagem direito no console.
}
console.log(mensagem)

*/

//4- Exercício construção de código

let idade
idade = Number(prompt("Digite a sua idade:"))

if (idade >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}



//5- Exercício construção de código

let turnoAlunos
turnoAlunos = prompt("Em qual turno você estuda? \n Responda - M (matutino) ou V (vespertino) ou N (noturno)").toLocaleLowerCase()


if (turnoAlunos === "m") {
    console.log("Bom dia!")
} else if (turnoAlunos === "v") {
    console.log("Boa tarde!")
} else if (turnoAlunos === "n") {
    console.log("Boa noite!")
} else {
    console.log("Turno não identificado. Por gentileza, digite novamente conforme solicitado.")
}


    
//6- Exercício construção de código

let turnoAlunos
turnoAlunos = prompt("Em qual turno você estuda? \n Responda - M (matutino) ou V (vespertino) ou N (noturno)").toLocaleLowerCase()

switch (turnoAlunos) {
    case "m":
        console.log("Bom dia!")
    break;
    case "v":
        console.log("Boa tarde!")
    break; 
    case "n":
        console.log("Boa noite!")
    break;   
    default:
        console.log("Turno não identificado. Por gentileza, digite novamente conforme solicitado.")
    break;    
}



//8- Exercício construção de código

let genero
let preco
let resposta

genero = prompt("Qual gênero de filme vocês vão assistir?").toLocaleLowerCase()
preco = Number(prompt("Qual é o preço do ingresso?"))

if(genero === "fantasia" && preco <= 15){

    resposta = prompt("Então,você aceita ir ao cinema?\n Responda - S (sim) ou N (não)").toLocaleLowerCase()
    switch (resposta) {
        case "s":
        console.log("Bom filme!")
        break;
        case "n":
        console.log("Que pena, até a próxima!")
        break;
        default:
        console.log("Resposta Inválida. Por gentileza, digite novamente conforme solicitado.")
        break;      
    }
    
} else {
    console.log("Escolha outro filme :(")
}