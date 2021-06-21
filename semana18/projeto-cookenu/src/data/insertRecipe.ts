import { connection } from '../index'
import { Recipes } from '../types/recipes'


export default async function insertRecipe(recipe: Recipes) {
    
    await connection.insert({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        cratedAt: recipe.cratedAt,
        user_id: recipe.user_id
    }).into('Recipes_Cookenu')
}