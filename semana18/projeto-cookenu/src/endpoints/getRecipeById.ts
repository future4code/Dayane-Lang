import { Request, Response } from 'express'
import selectRecipeById  from '../data/selectRecipeById'


export default async function getRecipeById(req: Request, res: Response): Promise<any> {

    try {

        const id: string = req.params.id

        const token = req.headers.authorization as string

        
        if(!token) {

            throw new Error('Not authorized. Token not informed.')
        }

        if(!id) {

            throw new Error('Missing paramter id.')
        }


        const recipe = await selectRecipeById(req.params.id)

        res
            .status(200)
            .send({message: "Success", recipe})

    } catch (error) {

        res
            .status(400)
            .send({

                message: error.message || error.sqlMessage
            })
    }
} 