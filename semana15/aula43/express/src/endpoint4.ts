import express, { Request, Response } from "express"
import cors from "cors"
import { countries, country } from "./countries"

const app = express()

app.use(express.json())
app.use(cors())


//  ENDPOINT 04 //

    /* - Método: PUT
       - Caminho: countries/edit/:id
       - Query parameters: name, capital, continent
       - Body (resposta):

        {
            "name": "Rússia",
            "capital": "Moscou"
        }
    */
    

    app.put("/countries/edit/:id", (req: Request, res: Response) => {
        let errorCode: number = 400

        try {
            const { name, capital } = req.body
            const index: number = countries.findIndex(
                country => country.id === Number(req.params.id)
            )
        
            if (index === -1) {
                errorCode = 404
                throw new Error("Id inválido!")
            } 
            
            if (!name) {
                errorCode = 400
                throw new Error("Nome não informado!")
            } 

            if (!capital) {
                errorCode = 400
                throw new Error("Capital não informada!")
            }

            countries[index].name = name
            countries[index].capital = capital
            res.status(200).send(req.body)
        } catch (error) {
            console.log(error)
            res.status(errorCode).send(error.message)
        }
        
    })

    app.listen(3003, () => {
        console.log("Server is running in http://localhost:3003")
    })
    
     