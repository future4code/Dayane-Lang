# EXERCÍCIO 01:

**Cadastro de usuários:**
- Método: `PUT`
- Caminho: `"/signup"`

-Crie um endpoint que faça o cadastro de usuários na aplicação. O endpoint deve receber as seguintes informações na **requisição**, em seu body:

```json
{
	"name": "Michael Scott",
	"email": "michael@dundermifflin.com",
	"password": "theboss",
	"role": "ADMIN"
}
```

-Os *roles* possíveis são `ADMIN` e `NORMAL`.

	Sua **resposta** deve ser um `token` de acesso com o `id` e o `role` do usuário.

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNjgzZTkxLWY1ODMtNDE4ZS04NzRhLWNjNzYzYjZhYThkYSIsImlhdCI6MTU5NzAyNDA4NCwiZXhwIjoxNjI4NTgxNjg0fQ.l6s8rKz1g_qS1uOJWSibWcGhDn-DbO7mWPEPGpLJ01Y"
}
```
---------

# EXERCÍCIO 02:


**Login:**
- Método: `POST`
- Caminho: `"/login"`

- Crie um endpoint que faça o login na aplicação. O endpoint deve receber as seguintes informações, em seu body:

```json
{
	"email": "michael@dundermifflin.com",
	"password": "theboss"
}
```

Sua resposta deve ser um `token` de acesso com o `id` e o `role` do usuário.

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNjgzZTkxLWY1ODMtNDE4ZS04NzRhLWNjNzYzYjZhYThkYSIsImlhdCI6MTU5NzAyNDA4NCwiZXhwIjoxNjI4NTgxNjg0fQ.l6s8rKz1g_qS1uOJWSibWcGhDn-DbO7mWPEPGpLJ01Y"
}
```
-------

# EXERCÍCIO 03:

**Endpoint autenticado - buscar todos os usuários:**
- Método: `GET`
- Caminho: `"/all"`

-Endpoint sem body, deve apenas retornar como **resposta** um array com todas as informações de todos os usuários. No entanto, para acessar este endpoint é necessário estar logado. Ou seja, agora passamos informações nos **headers**.

-----------

# EXERCÍCIO 04:

**Endpoint autorizado - apagar um usuário:** 
- Método: `DELETE`
- Caminho: `"/:id"`

-Endpoint sem body, deve receber o id de um usuário em seu **path.** Deve retornar uma mensagem de sucesso em caso de deleção. Para deletar um usuário, o perfil precisa ser **`ADMIN`**

```json
{
	"message": "Usuário apagado com sucesso!"
}
```