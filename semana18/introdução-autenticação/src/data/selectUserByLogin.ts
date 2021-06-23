import { connection } from '../index';
import { userTableName } from '../services/tablesDataBase';


export const selectUserByEmail = async(email: string): Promise<any> => {

  try {

    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ email })
 
    return result[0]

  } catch (error) {

    throw new Error(error.message || error.sqlMessage)
  }
   
}