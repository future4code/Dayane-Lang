import { connection } from '../index'


export default async function delUser(id: string) {
    
    await connection("Users_aula51")
      .where({ id })
      .delete()
    
}