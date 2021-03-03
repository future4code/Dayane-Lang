function criarTarefa() {
    const criarTarefa = document.getElementById("tarefa")
    const diaEscolhido = document.getElementById("dias-semana").value
    const listaDias = document.getElementsByClassName("diaEscolhido")
    
    if (criarTarefa.value !== "") {
        
        listaDias.innerHTML += `<li>${criarTarefa.value}</li>`
        criarTarefa.value = ""
    }
   
}