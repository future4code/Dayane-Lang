/* **Exercícios de interpretação de código**
    1)

    const bool1 = true      -> variável bool1 possui o atributo true
    const bool2 = false     -> variável bool2 possui o atributo false
    const bool3 = !bool2    -> variável bool3 não é igual a bool2, portanto, bool3 é true

    let resultado = bool1 && bool2 -> resultado = true && false
    console.log("a. ", resultado)  -> imprimirá :  a. false

    resultado = bool1 && bool2 && bool3 -> resultado = true && false && true
    console.log("a. ", resultado)       -> imprimirá :  a. false
    console.log("b. ", resultado)       -> imprimirá :  b. false

    resultado = !resultado && (bool1 || bool1)  -> bool1 é true / como as variáveis a e b resultaram em false, o !resultado é true, portanto true && true = true
    console.log("c. ", resultado)               -> imprimirá: c. true

    console.log("e. ", typeof resultado)        -> imprimirá: e. booland

    2)  
    
    let array                   -> array não possui valor atribuido portanto retornará undefined
    console.log('a. ', array)   -> imprimirá: a. undefined

    array = null                -> array possui valor atribuido  null
    console.log('a. ', array)   -> imprimirá: a. null
    console.log('b. ', array)   -> imprimirá: b. null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length) -> imprimirá: c. 10

    let i = 0
    console.log('d. ', array[i])    -> imprimirá : d. 3

    array[i+1] = 19                 -> array [0+1] =19
    console.log('e. ', array)       -> imprimirá: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    const valor = array[i+6]        -> array=[0+6]
    console.log('f. ', valor)       -> imprimirá f. 9 
*/

    
    //1- Exercício de escrita de código

    /*let perguntaUsuario,perguntaAmigo,idadeUsuario,idadeAmigo, diferencaIdades
     
        perguntaUsuario = prompt("Qual é a sua idade? ", idadeUsuario)
        perguntaAmigo  = prompt("Qual é a idade do seu melhor amigo ou da sua melhor amiga?", idadeAmigo)

        let idadeAmigo > idadeUsuario = true
        let idadeAmigo < idadeUsuario = false

        console.log("Sua idade é maior que a idade do seu melhor amigo?", true ||false) -> quero já apresentar true ou false se a minha idade for maior, porém,desta maneira tenho que usar o If .
    */

     let idadeUsuario
        let idadeAmigo

        idadeUsuario = prompt("Qual é a sua idade? ")
        idadeAmigo = prompt("Qual é a idade do seu melhor amigo ou da sua melhor amiga?")

        let diferencaIdades

        diferencaIdades= Number(idadeUsuario) - Number(idadeAmigo)
        console.log("A diferença entre as idades é: ", diferencaIdades + " anos.")
    


//2 - Exercício de escrita de Código

let numeroPar
let resultado

numeroPar = prompt("Digite um número Par")
resultado = Number(numeroPar) % 2
console.log(resultado)  
//Ao inserir um número Par o valor impresso é 0. Se o número for ímpar o valor impresso é 1. 


//3 - Exercício de escrita de Código

let listaTarefas = []
let primeiraTarefa
let segundaTarefa
let terceiraTarefa

primeiraTarefa = prompt("Informe sua 1ª tarefa diária:")
segundaTarefa = prompt("Informe sua 2ª tarefa diária:")
terceiraTarefa = prompt("Informe sua 3ª tarefa diária:")

listaTarefas.push(primeiraTarefa)
listaTarefas.push(segundaTarefa)
listaTarefas.push(terceiraTarefa)

console.log(listaTarefas)

let tarefaEscolhida = prompt("Tarefas já realizadas? Informe: 0, 1, 2 ")

listaTarefas.splice(tarefaEscolhida, 1)
console.log(listaTarefas) 

//4- Exercício de escrita de Código

let nomeUsuario
let emailUsuario

nomeUsuario = prompt("Qual é o seu nome?")
emailUsuario = prompt("Qual o seu melhor e-mail?")

console.log("O e-mail "+ emailUsuario + " foi cadastrado com sucesso. Seja bem-vindo(a) " + nomeUsuario+ "!")

   
//LINDOOOOOOO S2    