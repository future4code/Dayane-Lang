/* Exercícios interpretação de texto 

1)
    let valor = 0
    for(let i = 0; i < 5; i++) { //O programa inicia a contagem do início e faz a contagem até o número permitido, ou seja, do 1 ao 4.
    valor += i                  // O comando adição soma os números apresentados acima para depois atribuir o novo valor ao index.
    }
    console.log(valor)          // O valor apresentado é 10 (i=1+2+3+4)

2)
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30] //a) O console apresentou uma lista com os números 19,21,23,25,27,30.
    for (let numero of lista) {
    if (numero > 18) {
		console.log(numero)
	    }
    }
    


    let i = 0
    let lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

    for (let indice of lista){                          //b)Incluíndo o for of e com algumas alterações 
        console.log("O índice é:", i)                  //   é possível mostrar os índices da array conforme realizei ao lado.
    if (indice > 0) {
        console.log(indice)
    }
        i++
    }
*/

3)
    let arrayOriginal = [7, 13, 30, 45, 66, 77, 89]

    for (let i = 0; i < arrayOriginal.length; i++) {   //a.: imprime cada valor conforme o seu índice.
        console.log(arrayOriginal[i])
    }


    let arrayOriginal = [7, 13, 30, 45, 66, 77, 89]
    let arrayNova = []

        for (let numero of arrayOriginal) {             //b.: imprimiu os numbers: 30,66.
             if (numero % 2 === 0 ){
                arrayNova.push(numero)
            }
        } 
    console.log(arrayNova)

    for(let i = 0; i < arrayOriginal.length; i = i + 1) {
     console.log(arrayOriginal[i] / 10)     //---> Resposta c.: foram impressos no console (1, 2.1, 3, 4.5, 5, 5.6)
    }


    let arrayOriginal = [7, 13, 30, 45, 66, 77, 89]
    let i = 0
    let arrayStrings = []      

    for(let numero of arrayOriginal) {                 //d.: Imprimiu no console o índice de cada valor do array.
        console.log("O elemento do índex: " + i + " é " + numero)
        i ++
    }


    let arrayOriginal = [7, 13, 30, 45, 66, 77, 89]
    let valorMaximo = arrayOriginal[0]
    let valorMinimo = arrayOriginal[0]

    for(let numero of arrayOriginal){
        if(numero > valorMaximo){               
            valorMaximo = numero                 // e.: "O maior número é 89 e o menor é 7"
        }
        if(numero < valorMinimo){
            valorMinimo = numero
        }
    }
    console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`) 