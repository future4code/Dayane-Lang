import express, { Router } from 'express'
import cors from 'cors'
import { connection } from '../connection/dataBaseConnection'

const router: Router = express()

router.use(express.json());
router.use(cors())



export default async function selectUserByName(name: string):Promise<any> {

    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       WHERE name LIKE "%${name}%";
    `)
 
    return result[0]
 }