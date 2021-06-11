import { genSaltSync, hashSync, compareSync } from "bcryptjs"
import dotenv from 'dotenv';


dotenv.config()


export const createHash = (
   plainText: string
): string => {
   const salt: string = genSaltSync(12)
   const hash: string = hashSync(plainText, salt)
   return hash
}

export const compareHash = (
   plaintText:string,
   cypherText:string
):boolean=>{
   return compareSync(plaintText, cypherText)
}