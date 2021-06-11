import { Request, Response } from 'express'
import selectAnotherProfile  from '../data/selectAnotherProfile'
import { AuthenticationData } from '../types/authenticationData'
import { getTokenData } from '../services/authenticator'



export default async function getAnotherProfile(req: Request, res: Response): Promise<any> {

    try {

        const token = req.headers.authorization as string

        const tokenData: AuthenticationData = getTokenData(token)

        await selectAnotherProfile(tokenData.id)

        const id: string = req.params.id

        const user = await selectAnotherProfile(id)

    
        if(!user) {

            res.statusCode = 404

            throw new Error("User not found!")
        }

        res
            .status(200)
            .send({
                message: "Success", 
                id: user.id, 
                name: user.name, 
                email: user.email
            })

    } catch (error) {

        res
            .status(400)
            .send({

                message: error.message || error.sqlMessage
            })
    }
} 