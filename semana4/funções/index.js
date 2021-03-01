/* EXERCÍCIOS INTERPRETAÇÃO DE TEXTO

    1)
        function minhaFuncao(variavel) {
	        return variavel * 5
        }
        (minhaFuncao(2))   //A- imprimirá os números 10,50.
        (minhaFuncao(10))  //B- ao retirar o console.log, não imprimirá nenhuma informação e deixando apenas minhaFuncao() aparece o erro de que a function não existe: Uncaught TypeError: minhaFuncao(...) is not a function


        
    2)

        let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

        const outraFuncao = function(array) {
	        for (let i = 0; i < 2; i++) {
		        console.log(array[i])
	        }
        }                              // A- imprimirá no console somente a posição 0 e 1 do array, portanto, Darvas e Caio.
        outraFuncao(arrayDeNomes)     //  B- imprimirá no console os nomes Amanda e Caio, pois Amanda corresponde a posição 0 e Caio a posição 1, portanto correspondem a condição.
        


    3)

        const metodo = (array) => {
            let arrayFinal = [];
      
            for (let x of array) {
                if (x % 2 === 0) {
                     arrayFinal.push(x * x)
                }
            }                         //R.: A intenção neste código é mostrar a array com números que são multiplicados por ele mesmo, sendo que se
                                     // isso só ocorrerá se esse número da array inicial for divisível por 2.
                                    // A sugestão para um novo nome eu optaria por arrayInicial e x optaria por variavelArray
        return arrayFinal;
        }
        //console.log('arrayFinal')
*/

/* EXERCÍCIOS DE ESCRITA DE CÓDIGOS

//4)A

        
        function informacoesPessoais() {
            console.log('Eu sou a Dayane, tenho 34 anos, moro em Santa Catarina e sou estudante.')
        }
       informacoesPessoais()

*/

//4)B

        function informacaoPessoa(informacoes){
            let respostaQuestao

            if (informacoes ==='sim') {
                 respostaQuestao = 'sou estudante'
                } else {
                    respostaQuestao = 'não sou estudante'
            }
            return respostaQuestao
        }

        const nomePessoa = prompt('Informe o seu nome:')
        const idadePessoa = Number (prompt('Informe a sua idade:'))
        const cidadePessoa = prompt('Informe a sua cidade:')
        const questaoEstudante = ('Você é estudante?').toLocaleLowerCase()
        const respostaEstudante = informacaoPessoa(questaoEstudante)
        console.log(`Eu sou ${nomePessoa}, tenho ${idadePessoa} anos, moro em ${cidadePessoa} e ${respostaEstudante}.`)