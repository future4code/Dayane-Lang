//Exercício 1
//let array = [0, 8, 23, 16, 10, 15, 41, 12, 13]

function inverteArray(array) {
  return array.reverse();           // implemente sua lógica aqui
}
        

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   
   var i = 0;
   var arrayInvert = []              // implemente sua lógica aquir
   while  (i < array.length) {
      if (array[i] % 2 ==0) {
         arrayInvert.push(Math.pow(array[i], 2));
      }
      i++ ;    
   }
   return arrayInvert;
}     


//Exercício 3

function retornaNumerosPares (array) {
   var i = 0;
   var arrayInvert = []              // implemente sua lógica aquir
   while  (i < array.length) {
       if (array[i] % 2 ==0) {
         arrayInvert.push(array[i]);
       }
      i++;     
   }
   return arrayInvert;
}

//Exercício 4

function retornaMaiorNumero(array) {
   var i = 0;
   var maiorNumero = 0;                    // implemente sua lógica aqui
    while (i < array.length) {
       if (array[maiorNumero] < array[i+1]){
          maiorNumero = i + 1;
    }
    i++;
   }
   return array[maiorNumero]  
}
   

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length;     // implemente sua lógica aqui
}

//Exercício 6

/*function retornaExpressoesBooleanas() {
   
   const bool1 = true
   const bool2 = false
   const bool3 = !bool2
   const bool4 = !bool3
                                          // implemente sua lógica aqui
   const arrBoolean = [bool1 && bool2 && !bool4,
                       (bool1 && bool2) || !bool3,
                       ((bool2 || bool3) && (bool4 || bool1)),
                       (!(bool2 && bool3) || !(bool1 && bool3)),
                       (!(bool1) && !(bool3) || (!bool4 && bool3 && bool3))];
   
   return arrBoolean;
}  */ 

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const respostas = [false, false, true, true, true]
   return respostas

}

//Exercício 7

function retornaNNumerosPares(n) {
   let i = 0;
   let x = 0;
   let arrInvert = []
   while (x < n) {
      arrInvert.push(0 + i);           // implemente sua lógica aqu
      i += 2;
      x++;
   }
   return arrInvert;
}

// Exercício 8

function checaTriangulo(a, b, c) {
  

   const triangEquil = ((a == b) && (b == c));                        // implemente sua lógica aqui
   const triangIsos = ((a != b) || (b != c)) && ((a == b) || (b == c));

  if (triangEquil)
     return "Equilátero";
  else if (triangIsos)
     return "Isósceles";
  else
     return "Escaleno";
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   const maiorNum = num1 > num2 ? num1 : num2;    // implemente sua lógica aqui
   const menorNum = num1 < num2 ? num1 : num2;

   return {
      maiorNumero: maiorNum,
      maiorDivisivelporMenor: maiorNum % menorNum == 0 ? true : false,
      diferenca: maiorNum - menorNum
   }
}

// Exercício 10

function segundoMaiorEMenor(array) {
   let i = 0;
   let maior = 0;
   let bigNumber = [];
   let MaiorMenor = [];

   while (i < (array.length - 1)) {             // implemente sua lógica aqui
      if (array[maior] < array[i + 1]) {
         bigNumber.push(array[maior]);
         maior = i + 1;
      } else {
         if (bigNumber[bigNumber.length - 1] > array[i + 1]) {
            let indice = bigNumber.splice(bigNumber.length - 1, 1)[0];
            bigNumber.push(array[i + 1]);
            bigNumber.push(indice);
         } else {
            bigNumber.push(array[i + 1]);
         }
      }
      i++;
   }
   bigNumber.push(array[maior]);
   MaiorMenor.push(bigNumber[bigNumber.length - 2]);
   MaiorMenor.push(bigNumber[1]);

   return MaiorMenor;
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   const tamanho = array.length;

   for (let i = 0; i < tamanho; i++) {
      for (let y = 0; y < tamanho; y++) {
         if (array[y] > array[y + 1]) {
            let ordenar = array[y];

            array[y] = array[y + 1];
            array[y + 1] = ordenar;
         }
      }
  }
   return array
}


// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme ;
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}