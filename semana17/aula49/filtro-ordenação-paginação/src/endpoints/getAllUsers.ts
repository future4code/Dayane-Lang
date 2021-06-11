import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import selectAllUsers from '../data/selectAllsusers'


const router: Router = express()

router.use(express.json());
router.use(cors())


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   
   try {

      const users = await selectAllUsers()
 
      if(!users.length) {

         res.statusCode = 404

         throw new Error("Nenhum usuário encontrado!")
      }
 
      res.status(200).send(users)
       
    } catch (error) {

      console.log(error)

      res.send(error.message || error.sqlMessage)
    }
}

