import { Request, Response } from 'express'
import { generate } from '../services/idGenerator'
import { generateToken } from '../services/authenticator'
import { User } from '../types/user'
import { hash } from '../services/hashManager'
import { USER_ROLES } from '../types/user'
import  insertUser  from '../data/insertUser'


export default async function signup(req: Request, res: Response) {

    try {

        const { name, email, password, role } = req.body

        if (!name) {

            throw new Error("Please fill in a name.")
        }
 
        if (!email || email.indexOf("@") === -1) {

            throw new Error("Invalid email format!")
        }
  
  
        if (!password || password.length < 6) {
  
            throw new Error("The password must contain more than six digits.")

        }

        if (role !== USER_ROLES.ADMIN && role !== USER_ROLES.NORMAL) {
            throw new Error(`"role" must be "NORMAL" or "ADMIN"`)
         }
   
 
        const id: string = generate()

        const cypherPassword: string = await hash(password)
 
        const newUser: User = {
            id,
            name,
            email,
            password: cypherPassword,
            role
        }

        await insertUser(newUser)
 
        const token = generateToken({
            id,
            role: role
         })
 
        res
          .status(200)
          .send({message: "User created successfully!", token })
 
    } catch (error) {

       res.status(400).send({

          message: error.message || error.sqlMessage
       })
    }
}

