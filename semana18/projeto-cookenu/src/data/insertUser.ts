import { connection } from '../index'
import { User } from '../types/user'


export default async function insertUser(user: User) {
    
    await connection.insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role
    }).into('Users_Cookenu')
}