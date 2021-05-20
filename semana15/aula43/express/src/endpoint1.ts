import express, { Request, Response } from "express"
import cors from "cors"
import { countries, country } from "./countries"

const app = express()

app.use(express.json())
app.use(cors())


//ENDPOINT 01 //

    /* - Método: `GET`
       - Caminho: `countries/all`
       - Body (resposta):

        [
            {
                "id":0,
                "name":"África do Sul"
            },{
                "id":1,
                "name":"Angola"
            }
        ...
        ] 
    */
    
    app.get("/countries/all", (req: Request, res: Response) => {
        
        const result = countries.map(country => ({
            id: country.id,
            name: country.name
        }))

        if (result.length) {
            res
             .status(200)
             .send(result)
        } else {
            res
             .status(404)
             .send("Not found")
        }
    })


    app.listen(3003, () => {
        console.log("Server is running in http://localhost:3003")
    })
    
     