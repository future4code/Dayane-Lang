/*EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

***Exercício 1
a = 10
b = 10

console.log(b) -> retornará 10

b = 5
console.log(a, b) -> retornará (10,5) 

***Exercício 2
a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c) -> retornará (10,10,10) */

//EXERCÍCIO 1- ESCRITA DE CÓDIGOS 

let nome
let idade

console.log (typeof nome)     // -> retornará undefined (indefinido) por não ter sido atribuído valor a variável
console.log (typeof idade)    //  -> //retornará undefined indefinido por não ter sido atribuído 

nome= prompt ('Qual é o seu nome?')
idade= prompt ('Qual é a sua idade?')

console.log (typeof nome)     //-> ao realizar e responder a pergunta retornará string
console.log (typeof idade)    //-> ao realizar e responder a pergunta retornará string 
                                

console.log ('Olá' ,nome, ',', 'você tem' ,idade, 'anos.')

// Exercício 2 - Escrita de código

let cidadeEstado
let livro
let filme
let serie
let musica

cidadeEstado = prompt('Em qual cidade e estado você mora?')
console.log('Em qual cidade e estado você mora? Resposta: ${cidadeEstado}')
livro = prompt('Qual o seu livro favorito?')
console.log('Qual a sua cor favorita? Resposta: ${livro}')
filme = prompt('Qual seu filme favorito?')
console.log('Qual seu filme favorito? Resposta: ${filme}')
serie = prompt('Qual a sua série favorita?')
console.log('Qual a sua série favorita? Resposta: ${serie}')
musica = prompt('Qual estilo de músicas você curte?')
console.log('Qual estilo de músicas você curte? Resposta: ${musica}')


//EXERCÍCIO 3- ESCRITA DE CÓDIGOS 

let comidasPreferidas = ['sushi','pizza','pastel','macarrão','atum']
console.log (comidasPreferidas)

console.log ('Essas são as minhas comidas preferidas: \n ${comidasPreferidas[0]}  \n ${comidasPreferidas[1]} \n ${comidasPreferidas[2]}  \n ${comidasPreferidas[3]} \n ${comidasPreferidas[4]}')


let comidaUsuario

comidaUsuario = prompt("Qual sua comida favorita?")
console.log ('Nova lista: \n ${comidasPreferidas[0]} \n ${comidaUsuario} \n ${comidasPreferidas[2]}\n ${comidasPreferidas[3]} \n ${comidasPreferidas[4]}')
                          

//EXERCÍCIO 4- ESCRITA DE CÓDIGOS 

let pergunta = ["Hoje é segunda-feira?", "Você está com frio?", "Você está usando uma camisa azul?"]

let resposta = ["True", "False"]

console.log(`${pergunta[0]} \n ${resposta[0]} \n ${pergunta[1]} \n ${resposta[0]} \n ${pergunta[2]} \n ${resposta[1]}`)

