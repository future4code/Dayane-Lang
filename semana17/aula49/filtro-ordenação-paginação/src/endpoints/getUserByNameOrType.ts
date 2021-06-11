import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import selectUserByNameOrType from '../data/selectUserByNameOrType'



const router: Router = express()

router.use(express.json());
router.use(cors())


export const getUserByNameOrType = async (req:Request, res:Response) => {

   let errorCode = 400

   try {

      const orderBy = req.params.orderBy as string

      const users = await selectUserByNameOrType(orderBy)
      

      if(!users.length) {

         res.statusCode = 404

         throw new Error("Nenhuma informação encontrada!")
      }

      res.status(200).send(users)

   } catch (error) {
       
      res.status(errorCode).send(error.message || error.sqlMessage)

   }
} 

