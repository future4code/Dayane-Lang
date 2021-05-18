// EXERCÍCIO 03 //

<<<<<<< HEAD
    /*
=======
/*
>>>>>>> 849ffdca654457c01b9112df0a8871ff00ccd980
    Crie uma aplicação Node que receba uma string representando uma tarefa.
    O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. 
    A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.
    */

<<<<<<< HEAD

    const task = ["fazer atividade do curso", "estudar francês"]
    const newTask = process.argv[2]

    if (newTask) {
        task.push(`\n${newTask}`)

        console.log('Tarefa adicionada com sucesso!')

        console.log(`tarefas: [\n${task}\n]`)
        
    } else {
        console.log('Digite uma tarefa!')
    } 
=======
const task = ["Realizar atividades do Curso", "Estudar francês"];

const newTask = process.argv[2];

if (newTask) {
  task.push(`\n${newTask}`);
  console.log("Tarefa adicionada com sucesso!");
  console.log(`tarefas: [\n${task}\n]`);
} else {
  console.log("Digite uma tarefa!");
}
>>>>>>> 849ffdca654457c01b9112df0a8871ff00ccd980
