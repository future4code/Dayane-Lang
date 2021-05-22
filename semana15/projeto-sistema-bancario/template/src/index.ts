import express, { Request, Response } from 'express';
import cors from 'cors';
import { users, userAccount, transaction } from "./users";


const app = express()
app.use(express.json())
app.use(cors())


// Criar novo usuário/ conta
app.post('/users/createNewUser', (req: Request, res: Response) => {

  let errorCode: number = 400
     
  try {

      // desestruturando o body para pegar estes dados.
      const { name, cpf, birthDateAsString } = req.body
      
      // Pegará a data ("01/01/2021"), Quebrará as barras Que são strings e as transformará em um array. 
      const [day, month, year] = birthDateAsString.split("/") 

      const birthDate: Date = new Date(`${year}-${month}-${day}`)
      
      // O new Date().getTime() vai passar o timestemp a partir desse momento. O mesmo que utilizado abaixo.
      const ageInMilisseconds: number = Date.now() - birthDate.getTime()


      //Pega o ageInMilisseconds e o converte em anos
      const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 /365


      if(ageInYears < 18) {
          errorCode = 406
          throw new Error("Idade deve ser maior que 18 anos!")
      }


      // encontra uma conta com base no cpf
      const findCpf = (cpf: number): userAccount | undefined => {
        return users.find(account => {
        return account.cpf === cpf
       })
      }

      // encontra uma conta com base no nome
      const findName = (name: string): userAccount | undefined => {
        return users.find(account => {
          return account.name === name
        })
  
      }

      // objeto do usuário
      const newUser: userAccount = {
        name: req.body.name,
        cpf: req.body.cpf,
        birthDateAsString: req.body.birthDate,
        balance: 0,
        statement: []
    }

    // adiciona o objeto no array
    users.push(newUser)


      if(!req.body.name) {
          errorCode = 422
          throw new Error("Nome não preenchido. Por favor, preencha um nome.")
      }


      if(!req.body.cpf) {
          errorCode = 422
          throw new Error("CPF inválido. Tente novamente.")
      }

      res.status(201).send("Conta criada com sucesso! Seu saldo atualizado é 0 para depósitos.")

  } catch(error) {
      res.status(errorCode).send(error.message)
  }

})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})




/*
// Pegar todos os usuários/ contas cadastrados
app.get('/users/all', (req: Request, res: Response) => {

  let errCode: number = 400
  const accounts: Account[] = []

  try {

      if(!accounts.length) {
          res.statusCode = 404
          throw new Error("Nenhuma conta encontrada!")
      }

      res.status(200).send({message: "Success", accounts})

  } catch(error) {
      res.status(errCode).send(error.message)
  }
  
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
*/
