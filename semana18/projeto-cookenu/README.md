# Projeto COOKENU

**ENDPOINTS:**

***Signup***
- Método: POST
- Path: `/user/signup`
- Body:

```json
{
	"name": "Alice",
	"email": "alice@lbn.com",
	"password": "123456"
}
````

- Saídas:
````
{
	"access_token": "token de acesso"
}
````


***Login***

- Método: POST
- Path: `/user/login`
- Body de Resposta:

```json
{
	"email": "alice@lbn.com",
	"password": "123456"
}
```
- Saídas:

````
{
	"access_token": "token de acesso"
}
````

***getProfileUser***

- Método: GET
- Path: `/user/profile`
- Entradas:
````
Headers

Authorization: "token de autenticação"
````

- Saídas:

```json
Body

{
	"id": "id do usuário",
	"name": "Alice",
	"email": "alice@lbn.com"
}
```


***getUserById***

- Método: GET
- Path: `/user/:id`
- Entradas:
````
Path Param

id: "id do usuário"

Headers

Authorization: "token de autenticação"
`````

- Saídas: 

`````
Body

{
	"id": "id do usuário",
	"name": "Alice",
	"email": "alice@lbn.com"
}
`````


***createRecipe***

- Método: POST
- Path: `/recipe/create`
- Entradas:

````
Headers

Authorization: "token de autenticação"

Body

{
	"title": "título da receita",
	"description": "descrição da receita"
}
`````

***getRecipeById***

- Método: GET
- Path: `/recipe/:id`
- Entradas:

````
Path Param

id: "id da receita"

Headers

Authorization: "token de autenticação"
`````

- Saídas: 

````
Body

{
	"id": "id da receita",
	"title": "Ovo Frito",
	"description": "Pega o ovo, põe na frigideira e reza!"
	"cratedAt": "31/12/2020"
}
`````
