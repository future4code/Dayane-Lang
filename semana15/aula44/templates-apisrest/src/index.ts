import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}


// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})



//EXERCÍCIO 1//

/*
Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. 
A lista está disponível acima.
a. Qual método HTTP você deve utilizar para isso?
R: O método HTTP é o GET para que traga todas as informações da lista.

b. Como você indicaria a entidade que está sendo manipulada?
R: A entidade manipulada é a /users.
*/

app.get("/users", (req:Request, res: Response) => {
  const result = users.map(user => ({
    id: user.id,
    name:user.name

  }))

  res
    .status(200)
    .send(result)
})




//EXERCÍCIO 2//

/*

Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade `type` 
específica, recebendo apenas um `type` por vez. Após isso, responda:

*a.* Como você passou os parâmetros de type para a requisição? Por quê?
R. Passei os parâmetros pelo Query, por ampliar o resultado da busca.

b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
R. Através do enum por uma lista de tipos válidos Que atribuirá ao type user.

*/

app.get("/users/searchByType", (req: Request, res: Response) => {
  let errCode: number = 400;

  try{

    if (!req.query.type) {
        errCode = 400;
        throw new Error("Tipo indefinido. Preencha um tipo existente.");
    }

    if (req.query.type !== "ADMIN" && req.query.type !== "NORMAL") {
        errCode = 422;
        throw new Error("Tipo inválido. Preencha um tipo existente.");
    }

    const result = users.filter(
        user => user.type === req.query.type
    )
    
    if (result.length === 0) {
      errCode = 404;
      throw new Error("Usuários não localizados.")
    }

    res
      .status(200)
      .send(result)

  } catch (error) {
    res.status(errCode).send({message:error.message});
  }
})


//EXERCÍCIO 3//

/*
Vamos agora praticar o uso de buscas mais variáveis. 
Faça agora um endpoint de busca que encontre um usuário buscando ****por **nome**.

*a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
R: O tipo de envio é o Query.

b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário 
tenha sido encontrado.
*/

app.get("/users/searchByName", (req: Request, res: Response) => {
  let errCode: number = 400;

  try{

    
      if (!req.query.name) {
          errCode = 400;
          throw new Error("Nome indefinido! Por favor, preencha algum nome.")
      }

      const result = users.filter(
          user => user.name.toLocaleLowerCase().includes(req.query.name as string)
      )

      if (result.length === 0) {
          errCode = 404;
          throw new Error("Nome não encontrado!")
      }

      res
          .status(200)
          .send(result)

  } catch (error) {
      res.status(errCode).send({message: error.message});
  }

})




//EXERCÍCIO4

/*

Fizemos algumas buscas no nosso conjunto de itens, agora é hora de **adicionar** coisas. 
Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método `POST` para 
adicionar um item ao nosso conjunto de usuários.

a. Mude o método do endpoint para `PUT`. O que mudou?
R. Não mudou nada, o usuário foi inserido normalmente.

b. Você considera o método `PUT` apropriado para esta transação? Por quê?
R. Não, pois o método PUT é mais usado para realizar alterações em um id existente.

*/

//app.put("/user", (req: Request, res: Response) => {
  app.post("/users", (req: Request, res: Response) => {

    let errCode: number = 400

    try {
        const reqBody: User = {
        id: new Date().getDate(),      // id: Date.now() - retornar um número aleatório 
        name: req.body.name,
        email: req.body.email,
        type: req.body.type,
        age: req.body.age
        }

        if(!reqBody.name || !reqBody.email || !reqBody.type || !reqBody.age) {
            errCode = 422
            throw new Error("Há erros ao inserir dados. Preencha corretamente.")
        }

        users.push(reqBody)
        res.status(200).send("Usuário inserido com sucesso!")

    } catch(error) {
        res.status(errCode).send({message: error.message})

    }

})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

