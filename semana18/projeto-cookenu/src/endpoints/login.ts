import { Request, Response } from 'express'
import selectUserByLogin from '../data/selectUserByLogin'
import { generateToken } from '../services/authenticator'
import { loginInput } from '../types/loginInput'
import { compare } from '../services/hashManager'



export default async function login(req: Request, res: Response) {

    const input: loginInput = {
        email: req.body.email,
        password: req.body.password
    }

    try {


        if (!input.email || input.email.indexOf("@") === -1) {

          throw new Error("Invalid email format!")
        }

        const user = await selectUserByLogin(input.email)

        if(!user) {

            res.statusCode = 404

            throw new Error("User not found!")
        }


        if (!input.password || input.password.length < 6) {

            throw new Error("The password must contain more than six digits.")
        }


        const passwordIsCorrect: boolean = await compare(
            input.password,
            user.password
        )
   
        if (!passwordIsCorrect) {

            res.statusCode = 401

            throw new Error("Incorrect password!")
        }

        const token = generateToken({
            id: user.id,
            role:user.role
         })


        res
            .status(200)
            .send({message: "Success", token})

    } catch (error) {

        res.status(400).send({

            message: error.message || error.sqlMessage
        })
    }
} 



