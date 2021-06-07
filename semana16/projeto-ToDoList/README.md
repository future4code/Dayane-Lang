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
# ESTRUTURA DE DADOS

	♦ USUÁRIO
	 -id
	 -name
	 -nickname

	♦ TAREFAS
	 -id
	 -title
	 -description
	 -deadline
	 -status " to do " || " doing " || " done "
	 -autor
	 -assignees

___________________________________________________________________________________________

# CRIAÇÃO DE TABELAS

		CREATE TABLE todolist_users (
				id VARCHAR(64) PRIMARY KEY, 
				name VARCHAR(64) NOT NULL, 
				nickname VARCHAR(64) UNIQUE NOT NULL, 
				email VARCHAR(64) UNIQUE NOT NULL
			);

		CREATE TABLE todolist_tasks (           
				id VARCHAR(64) PRIMARY KEY, 
				title VARCHAR(64) NOT NULL, 
				description VARCHAR(1024) DEFAULT "No description provided",
              	status Enum("TO_DO", "DOING", "DONE") DEFAULT "To_Do",
				limit_date DATE NOT NULL,
				author_id varchar(64) NOT NULL,
				FOREIGN KEY (author_id) REFERENCES todolist_users(id)
			);

		CREATE TABLE todolist_assignees (
				task_id VARCHAR(64),
				assignee_id VARCHAR(64),
                PRIMARY KEY (task_id, assignee_id),
				FOREIGN KEY (task_id) REFERENCES todolist_tasks(id),
				FOREIGN KEY (assignee_id) REFERENCES todolist_users(id)
				); 	

___________________________________________________________________________________________

# ENDPOINTS:

♦ CRIAR USUÁRIO
	- Método: PUT
	- Path: `/user/createUser`
	- Body: name, nickname, email (Obrigatórios)

	```json
	{
		"name": "Astro Dev",
		"nickname": "astrodev",
		"email": "astro@dev.com"
	}
	```

♦ PEGAR USUÁRIO PELO ID
	- Método: GET
	- Path: `/user/:id`
	- Path Param: é o id do usuário
	- Body: id, nickname  (Caso não os encontre, mostrar uma mensagem de erro)

	```json
	{
		"id": "001",
		"nickname": "astrodev",
	}
	```

♦ EDITAR USUÁRIO
	- Método: PUT
	- Path: `/user/edit/:id`
	- Path Param: é o id do usuário
	- Body: name, nickname, email (Opcionais, porém não podem ser campos vazios)

	```json
	{
		"name": "Astro Dev",
		"nickname": "astrodev",
		"email": "astro@dev.com"
	}
	```

♦ CRIAR TAREFA
	- Método: PUT 
	- Path: `/task/createTask`
	- Body:

		```json
		{
			"title": "Projeto To Do List - Alunos turma Cruz",
			"description": "Módulo BackEnd- Criar Banco de Dados dos alunos",
			"limitDate": "15/06/2021",
			"creatorUserId": "001"
		}
		```

♦ PEGAR TAREFA POR ID
	- Método: GET
	- Path: `/task/:id`
	- Path Param: id da tarefa
	- Body:

	```json
	{
		"taskId": "001",
		"title": "Projeto To Do List - Alunos turma Cruz",
		"description": "Módulo BackEnd- Criar Banco de Dados dos alunos",
		"limitDate": "15/06/2021",
		"status": "To_Do",
		"creatorUserId": "001",
		"creatorUserNickname": "astrodev"
	}
	```

♦ PEGAR TODOS OS USUÁRIOS
	- Método: GET
	- Path: `/users/all`
	- Body:

	```json
	{
		"users": [{
			"id": "001",
			"nickname": "astrodev"
		}]
	}
	```


♦ PEGAR TAREFAS CRIADAS PELO USUÁRIO 
	- Método: GET
	- Path: `/task?creatorUserId=id`
	- Query String: indica o id do usuário que criou através da chave creatorUserId
	- Body:

	```json
	{
		"tasks": [{
			"taskId": "001",
			"title": "Projeto To Do List - Alunos turma Cruz",
			"description": "Módulo BackEnd- Criar Banco de Dados dos alunos",
			"limitDate": "15/06/2021",
			"creatorUserNickname": "astrodev"
			"creatorUserId": "001",
			"status": "To_Do",
			"creatorUserNickname": "astrodev"
		}]
	}
	```

♦ PEGAR USUÁRIO PELA QUERY
	- Método: GET
	- Path: `/user?query=astro`
	- Query String: termo de busca indicado através da chave query
	- Body:

	```json
	{
		"users": [{
			"id": "001",
			"nickname": "astrodev",
		}]
	}
	```

♦ ATRIBUIR UM USUÁRIO RESPONSÁVEL Á UMA TAREFA
	- Método: POST
	- Path: `/task/assignees`
	- Body:

	```json
	{
		"task_id": "Astro Dev",
		"assignee_id": "astrodev"
	}
	```


