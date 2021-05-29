# Projeto To Do List

O projeto consiste na execução de tarefas de uma lista. Ou seja, cada usuário cadastrado terá uma ou várias tarefas a serem executadas. 
-O cadastro do usuário pede apenas nome, apelido e e-mail.
-As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). 
-Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa-las. 
-Mais de um usuário pode ser diretamente responsável de mesma tarefa. 
-Os status das tarefas são 3: *to do* ("a fazer"), *doing* ("fazendo") e *done* ("feita").

Toda a estrutura do Projeto proposto encontra-se no notion: 
https://www.notion.so/WFS11-S16-To-Do-List-32fc7eb26df444c3a2dd7a8882ec3227

**************************************************************************************************************************
# ENDPOINTS:

### Criar usuário
- Método: PUT ou POST
- Path: `/user/createUser`
- Body:

json
{
	"name": "Astro Dev",
	"nickname": "astrodev",
	"email": "astro@dev.com"
}
___________________________________________________________________________________________

### Criar tarefa

- Método: PUT ou POST
- Path: `/task/createTask`
- Body:

json
{
	"title": "",
	"description": "",
	"limitDate": "",
	"creatorUserId": ""
}
