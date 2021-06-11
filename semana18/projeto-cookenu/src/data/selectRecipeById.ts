import { connection } from '../index'


export default async function selectRecipeById(id: string): Promise<any> {

    const result = await connection.raw(`
        SELECT * FROM Recipes_Cookenu
        WHERE id = "${id}";
    `)

    return result[0]

} 