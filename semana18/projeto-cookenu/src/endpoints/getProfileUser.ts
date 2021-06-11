import { Request, Response } from 'express'
import selectProfileUser  from '../data/selectProfileUser'
import { AuthenticationData } from '../types/authenticationData'
import { getTokenData } from '../services/authenticator'



export default async function getProfileUser(req: Request, res: Response): Promise<any> {

    try {

        const token = req.headers.authorization as string

        const tokenData: AuthenticationData = getTokenData(token)

        const user = await selectProfileUser(tokenData.id)

        if(!user) {

            res.statusCode = 404

            throw new Error("User not found!")
        }


        res.status(200).send({message: "Success", id: user.id, name: user.name, email: user.email})

    } catch (error) {

        res.status(400).send({

            message: error.message || error.sqlMessage
        })
    }
} 