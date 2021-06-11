import { connection } from '../index'


export default async function selectAnotherProfile(id: string): Promise<any> {

    const result = await connection.raw(`
        SELECT id, name, email 
        FROM Users_Cookenu
        WHERE id = "${id}";
    `)

    return result[0][0]

} 