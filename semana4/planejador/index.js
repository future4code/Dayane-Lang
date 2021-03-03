function criarTarefa() {
    let escolha = document.getElementById("dias-semana").value
    let tarefa = document.getElementById("tarefa").value
    document.getElementById(escolha).innerHTML += "<p>- " + tarefa + "</p>"
    document.getElementById("tarefa").value = ""
    document.getElementById("dias-semana").value = "domingo"
}