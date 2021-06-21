import { connection } from '../index';
  
export default async function selectUserByEmail (
  email: string
  ): Promise<any>  {
    
    const result = await connection
      .select("*")
      .from("Users_aula51")
      .where({ email })

    return result[0]

}