import { BaseDatabase } from "./mysql/BaseDataBase"
import { User } from "../business/entities/user"
import { tableUsers } from "./mysql/tablesNames"

export class UserDatabase extends BaseDatabase{
    insertUser = async(user: User) => {

        await BaseDatabase.connection.insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
        }).into(tableUsers)
    }


    selectUserByLogin = async(email: string) => {
        
        const result = await BaseDatabase.connection
            .select("*")
            .from(tableUsers)
            .where({ email })

            return result[0]
    }

}


