// EXERCÍCIO 02 //

<<<<<<< HEAD
    /*
=======
/*
>>>>>>> 849ffdca654457c01b9112df0a8871ff00ccd980
    Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos.
    O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
    */

<<<<<<< HEAD
        const OperationMathematic = process.argv[2]
        const firstValue = process.argv[3]

        const secondValue = process.argv[4]
        
        let result

        switch(OperationMathematic) {
            case "add":
                result = Number(firstValue) + Number(secondValue)
                break
            case "sub":
                result = Number(firstValue) - Number(secondValue)
                break
            case "mult":
                result = Number(firstValue) * Number(secondValue)
                break
            case "div":
                result = Number(firstValue) / Number(secondValue)
        }

        console.log(`Resultado: ${result}`)
=======
const matOperation = process.argv[2];
const firstValue = process.argv[3];
const secondValue = process.argv[4];

let resultOperation;

switch (matOperation) {
  case "add":
    resultOperation = Number(firstValue) + Number(secondValue);
    break;
  case "sub":
    resultOperation = Number(firstValue) - Number(secondValue);
    break;
  case "mult":
    resultOperation = Number(firstValue) * Number(secondValue);
    break;
  case "div":
    resultOperation = Number(firstValue) / Number(secondValue);
}

console.log(`Resultado: ${resultOperation}`);
>>>>>>> 849ffdca654457c01b9112df0a8871ff00ccd980
