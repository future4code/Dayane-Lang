/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
alert("Bem vindo(a) ao jogo de BLACKJACK!")

if(confirm("Quer iniciar uma nova rodada?")){
    
   //Usuário
    const carta1 = comprarCarta()
    const cartaUsuario1 = carta1.texto
    const valorCartaUsuario1 = carta1.valor

    const carta2 = comprarCarta()
    const cartaUsuario2 = carta2.texto
    const valorCartaUsuario2 = carta2.valor

    const carta3 = comprarCarta()
    const cartaUsuario3 = carta3.texto
    const valorCartaUsuario3 = carta3.valor

    const pontosUsuario2 = Number(valorCartaUsuario1) + Number(valorCartaUsuario2)
    const pontosUsuario3 = Number(valorCartaUsuario1) + Number(valorCartaUsuario2) + Number(valorCartaUsuario3)

    //Computador
    const cartaComp1 = comprarCarta()
    const cartaComputador1 = cartaComp1.texto
    const valorCartaComputador1 = cartaComp1.valor

    const cartaComp2 = comprarCarta()
    const cartaComputador2 = cartaComp2.texto
    const valorCartaComputador2 = cartaComp2.valor

    const cartaComp3 = comprarCarta()
    const cartaComputador3 = cartaComp3.texto
    const valorCartaComputador3 = cartaComp3.valor

    const pontosComputador2 = Number(valorCartaComputador1) + Number(valorCartaComputador2)
    const pontosComputador3 = Number(valorCartaComputador1) + Number(valorCartaComputador2) + Number(valorCartaComputador3)

   if(confirm(`Suas cartas são ${cartaUsuario1} ${cartaUsuario2}. A carta revelada do computador é  ${cartaComputador1}. Deseja comprar outra carta?`)){
      alert(`Suas cartas são ${cartaUsuario1} ${cartaUsuario2} ${cartaUsuario3}. Sua pontuação é ${pontosUsuario3}. As cartas do computador são ${cartaComputador1} ${cartaComputador2}. A pontuação do computador é ${pontosComputador2}.`)
   
   } else{
      alert(`Suas cartas são ${cartaUsuario1} ${cartaUsuario2}. Sua pontuação é ${pontosUsuario2}. As cartas do computador são ${cartaComputador1} ${cartaComputador2} ${cartaComputador3}. A pontuação do computador é ${pontosComputador3}.`)
}
    
/***Resultado do jogo***/
if((pontosUsuario3 === pontosComputador2) || (pontosUsuario2 === pontosComputador3)){
   alert("Empate!")
} else if((pontosUsuario3 > pontosComputador2) || (pontosUsuario2 > pontosComputador3)){
   alert("O usuário ganhou!")
} else{
   alert("O computador ganhou!")
}

} else {
   alert("O jogo acabou!")
}
