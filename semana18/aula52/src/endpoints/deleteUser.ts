import { Request, Response } from 'express'
import { authenticationData } from '../types/authenticationData'
import { getTokenData } from '../services/authenticator'
import { USER_ROLES } from '../types/users'
import delUser from '../data/delUser'

export default async function deleteUser (req: Request, res: Response) {
    
    try {

        const id: string = req.params.id as string

        const token: string = req.headers.authorization as string

        const tokenData: authenticationData = getTokenData(token)

        if (tokenData.role !== USER_ROLES.ADMIN) {

            res.statusCode = 401

            throw new Error('Funcionalidade permitida somente para usuários "ADMIN"!')
        }

        await delUser(id)

        res.status(200).send("Usuário deletado com sucesso!")

    } catch (error) {

        res.send({

            message: error.message || error.sqlMessage
        })
    }
}