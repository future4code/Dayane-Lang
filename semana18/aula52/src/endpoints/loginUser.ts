import { compare } from 'bcryptjs';
import { Request, Response } from 'express';
import selectUserByEmail from '../data/selectUserByLogin';
import { generateToken } from '../services/authenticator';
import { loginInput } from '../types/loginInput';


export default async function createUser(
    req: Request, 
    res: Response) 
    {

    const input: loginInput = {
        email: req.body.email,
        password: req.body.password
    }

    try {


        if (!input.email || input.email.indexOf("@") === -1) {

          throw new Error("E-mail inválido!")
        }

        const users = await selectUserByEmail(input.email)

        if(!users) {

            res.statusCode = 404

            throw new Error("Usuário não encontrado!")
        }


        if (!input.password || input.password.length < 6) {

            throw new Error("A senha deve conter mais de seis digitos!")
        }


        const passwordIsCorrect: boolean = await compare(
            input.password,
            users.password
        )
   
        if (!passwordIsCorrect) {

            res.statusCode = 401

            throw new Error("Senha incorreta!")
        }
       

        const token = generateToken({
            id: users.id,
            role: users.role
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