import { BaseDatabase } from "./mysql/BaseDataBase"
import { Post } from "../business/entities/post"
import { tablePosts } from "./mysql/tablesNames"

export class PostDatabase extends BaseDatabase{

    insertPost = async(post: Post) => {

        await BaseDatabase.connection.insert({
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            created_at: post.created_at,
            author_id: post.author_id
        }).into(tablePosts)
    }


    selectPostById = async(id: string) => {

        const result = await BaseDatabase.connection.raw(`
            SELECT * FROM ${tablePosts}
            WHERE id = "${id}";
        `)

        return result[0]
    }

}