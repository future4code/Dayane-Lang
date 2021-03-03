function criarTarefa() {
    const criarTarefa = document.getElementById("tarefa")
    const diaEscolhido = document.getElementById("dias-semana").value
        
    if (criarTarefa.value !== "") {
        const listaDias = document.getElementsByClassName("diaEscolhido")

        listaDias.innerHTML += `<li>${criarTarefa.value}</li>`
        criarTarefa.value = ""
    }
   
}