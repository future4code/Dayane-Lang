//EXERCÍCIO2

 /* a) Quais são as entradas e saídas dessa função? 
    Copie a função para um arquivo .ts e faça a tipagem desses parâmetros */

        // As entradas são: numeros (type array)
        // As saídas são: estatisticas (type object)


        function obterEstatisticas(numeros: number[]) {

            const numerosOrdenados: number[] = numeros.sort(
                (a, b) => a - b
            )

            let soma = 0

            for (let num of numeros) {
                soma += num
            }

            const estatisticas = {
                maior: numerosOrdenados[numeros.length - 1],
                menor: numerosOrdenados[0],
                media: soma / numeros.length
            }

            return estatisticas
          
        }


/* b) Que outras variáveis compõem essa função? Explicite a tipagem de todas elas */
    // A variável numerosOrdenados (tipagem: array) e variável soma (tipagem: number)



/* c) Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. 
        Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript: 
            const amostraDeIdades = {
            numeros: [21, 18, 65, 44, 15, 18],
            obterEstatisticas: (numeros) => {...}
        } */


        type estatisticas = {
            maior: "number",
            manor: "number",
            media: "number"
        }

        type amostraDeDados = {
            numeros: number[],
            obterEstatisticas: (numeros: number) => estatisticas
        }

        console.log(obterEstatisticas([21, 18, 65, 44, 15, 18]))

