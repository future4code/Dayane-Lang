import * as jwt from  'jsonwebtoken';
import { authenticationData } from '../types/authenticationData';


export function generateToken(input: authenticationData): string {

    const expiresIn = "1y"

    const token: string = jwt.sign({ id: input, role: input.role },
        process.env.JWT_KEY as string,
        { expiresIn })

    return token
}

export function getTokenData(token: string): authenticationData{
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as authenticationData
    return {
        id: payload.id,
        role: payload.role
     }
}
  


    

