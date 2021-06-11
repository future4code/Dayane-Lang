import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import selectUsersWithAllFilters from '../data/selectUsersWithAllFilters'
import { searchUsersInputs } from '../types/searchs'



const router: Router = express()

router.use(express.json());
router.use(cors())

export const getUsersWithAllFilters = async (req: Request, res: Response) => {
    
    let errorCode = 400

    try {
        const {
            name,
            type,
            orderByWhat = "name",
            orderByHow = "DESC",
            page = "1"
        } = req.query as searchUsersInputs

        let condition = ""

        if (name && !type) {
            condition = `WHERE name LIKE "%${name}%"`
        } 
        
        if (!name && type) {
            condition = `WHERE type = "${type}"`
        } 
        
        if (name && type) {
            condition = `WHERE name LIKE "%${name}%" OR type = "${type}"`
        }

        if (!["name", "type"].includes(orderByWhat)) {
            errorCode = 422

            throw new Error(`"orderByWhat" aceita "name" ou "type"`)
        }

        if (!["ASC", "DESC"].includes(orderByHow)) {
            errorCode = 422
            
            throw new Error(`"orderByHow" aceita "ASC" ou "DESC"`)
        }

        const pageNumber: number = Number(page)

        if (!pageNumber) {
            errorCode = 422

            throw new Error(`"page" deve ser um número positivo`)
        }

        const offset: number = 5 * (pageNumber - 1)

        const users = await selectUsersWithAllFilters(condition, orderByWhat, orderByHow, offset)

        if (!users.length) {
            errorCode = 404

            throw new Error("Nenhum usuário encontrado!")
        }

        res.status(200).send(users)

    } catch (error) {
        
        console.log(error)

        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}