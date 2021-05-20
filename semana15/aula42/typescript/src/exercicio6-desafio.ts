//EXERCÍCIO6-DESAFIO

/* 
Tendo este pequeno texto em mente, 
você deve criar uma função que determine a que idade histórica (em negrito no texto) um ano pertence.
Ela deve esperar receber o ano e um outro parâmetro que seja a sigla "AC" ou "DC". 
Algumas características a mais desta função:
- Caso ela seja chamada sem passar uma sigla, ela deve automaticamente concluir que se trata de um ano "DC"
- Caso ela seja chamada passando um valor inválido (tanto para o ano como para a sigla), 
ela deve retornar uma mensagem indicando um erro. 
*/

enum sigla {
  AC = "AC",
  DC = "DC",
}

function checaPeriodoHistorico(ano: number, sigla?: sigla): string {
  let periodoHistorico: string = "";

  let campoSigla: string = sigla ? sigla : "DC";

  if (ano < 4000 && campoSigla === "AC") {
    periodoHistorico = "Pré-história";
  }

  if (
    (ano >= 4000 && campoSigla === "AC") ||
    (ano < 476 && campoSigla === "DC")
  ) {
    periodoHistorico = "Idade Antiga";
  }

  if ((campoSigla === "DC" && ano >= 476) || ano < 1453) {
    periodoHistorico = "Idade Média";
  }

  if ((campoSigla === "DC" && ano >= 1453) || ano < 1789) {
    periodoHistorico = "Idade Moderna";
  }

  if ((campoSigla === "DC" && ano >= 1789) || ano < 2022) {
    periodoHistorico = "Idade Contemporânea";
  }

  return periodoHistorico;
}

const periodoHistorico = checaPeriodoHistorico(4000, sigla.DC);
console.log(periodoHistorico);
