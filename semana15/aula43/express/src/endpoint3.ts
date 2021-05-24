import express, { Request, Response } from "express"
import cors from "cors"
import { countries, country } from "./countries"

const app = express()

app.use(express.json())
app.use(cors())


// ENDPOINT 03 //

    /* - Método: GET
       - Caminho: countries/search
       - Query parameters: name, capital, continent
       - Body (resposta):

        http://localhost:3003/countries/search?name=Bra

        [
            {
                "id": 11,
                "name": "Congo-Brazzaville",
                "capital": "Brazavile",
                "continent": "África"
            }, 
            {
                "id": 60,
                "name": "Brasil",
                "capital": "Brasília",
                "continent": "América"
            }
        ]
    */
    
    app.get("/countries/search", (req: Request, res: Response) => {
        if (!req.query.name && !req.query.capital && !req.query.continent) {
            res.status(404).send("Nenhum parâmetro de busca foi informado!")
        } else {
        
            let result: country[] = countries

            if (req.query.name) {
                result = result.filter(
                country => country.name.includes(req.query.name as string)
                )
            }

            if (req.query.capital) {
                result = result.filter(
                country => country.capital.includes(req.query.capital as string)
                )
            }

            if (req.query.continent) {
                result = result.filter(
                country => country.continent.includes(req.query.continent as string)
                )
            }

            if (result.length) {
                res.status(200).send(result)
            } else {
                res.status(404).send("Not found")
            }
        }
    })

    app.listen(3003, () => {
        console.log("Server is running in http://localhost:3003")
    })
    
     