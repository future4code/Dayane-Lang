import * as jwt from  'jsonwebtoken';
import { authenticationData } from '../types/authenticationData';


export function generateToken(id: string): string {

    const token: string = jwt.sign({id},
        process.env.JWT_KEY as string,
        {expiresIn: "1d"})

    return token
}

export function getTokenData(token: string): authenticationData{
    const payload = jwt.verify(token, process.env.JWT_KEY!)
    return payload as authenticationData;
}