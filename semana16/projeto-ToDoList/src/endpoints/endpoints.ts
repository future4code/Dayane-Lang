import express, { Router, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

import {Task, User}   from '../types/types';
import { createUser, createTask } from '../queries/queries';



const router: Router = express.Router()
router.use(express.json())
router.use(cors())

dotenv.config()

const { formatStringDate } = require("../utils/utils")

router.post('/user/createUser', async (req: Request, res: Response) => {

    try {
  
      const {name, nickname, email} = req.body
  
      const id = uuidv4()

      if (!name || !nickname || !email) {
  
        throw new Error("Nome, Nickname ou email não informados!")
  
      }
  
       const newUser: User = {id, name: name, nickname: nickname, email: email}
  
       await createUser(newUser)
   
       res.status(200).send("Usuário criado com sucesso!")
  
     } catch (error) {
  
       res.status(400).send(error.message)
       
     }
})


router.post('/task/createTask', async (req: Request, res: Response) => {

    try {
 
      if (
        !req.body.title || 
        !req.body.description || 
        !req.body.limit_date || 
        !req.body.author_id || 
        !req.body.status
        
      ) {
        
       throw new Error("Título, descrição, data limite, status ou id não informados!")
 
      }
 
      const {title, description, limit_date, author_id, status} = req.body
 
      const id = uuidv4()
    
      const newTask: Task = {
          id, title: title, 
          description: description, 
          limit_date: 
        await formatStringDate(limit_date), 
          author_id: author_id, 
          status: status
      }
      await createTask(newTask)
  
      res.status(200).send("Tarefa criada com sucesso!")
 
    } catch (error) {
 
      res.status(400).send(error.message)
    }
})

export default router;