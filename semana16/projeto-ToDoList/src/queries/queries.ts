import { connection } from '../connections/dbConnection';
import { User, Task, Assignee } from '../types/types'


export const createUser = async(user: User): Promise<any> => {
    
    try {

        await connection.insert({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email
          })
          .into("todolist_users");

        console.log("Usuário inserido com sucesso!")

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}

export const createTask = async(task: Task): Promise<void> => {

    try {

        await connection.insert({
            id: task.id,
            title: task.title,
            description: task.description,
            limit_date: task.limit_date,
            author_id: task.author_id
        })
        .into("todolist_tasks")

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}

export const editUser = async (id: string, name: string, nickname: string) => {

    try {
        
        await connection('todolist_users')
        .where('user_id', id)
        .update({
            name: name,
            nickname: nickname
        })

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
} 


export const getUserById = async(id: string): Promise<any> => {

    try {

        const result = await connection.raw(`
            SELECT * FROM todolist_users
            WHERE id = '${id}';
        `)

        return result[0]

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }

}


export const getTaskById = async(id: string): Promise<any> => {

    try{

        const result = await connection.raw(`
            SELECT * FROM todolist_tasks
            WHERE id = '${id}';
        `)

        return result[0]

    }  catch (error) {

        console.log(error.sqlMessage || error.message)
    }

}

export const getAllUsers = async (): Promise<any> => {
    
    try {
    const result = await connection.raw(`
        SELECT id, nickname 
        FROM todolist_users;
    `)
    
     return result[0]
     
    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}


export const getTaksCreatedUserId = async (user_id: string): Promise<any> => {

    try {

        const result = await connection.raw(`
            SELECT
                tasks.id as taskId,
                tasks.title,
                tasks.description,
                tasks.limit_date as limitDate,
                tasks.status,
                tasks.author_id as creatorUserId,
                users.nickname as creatorUserNickname
            FROM todolist_tasks
            LEFT JOIN todolist_users ON todolist_tasks.author_id = todolist_users.id
            WHERE todolist_users.id='${user_id}';
        `)

        return result[0]

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}


export const searchUserByNickname = async (nickname: string): Promise<any> => {

    try {

        const result = await connection("todolist_users")
        .select("id", "nickname")
        .where("nickname", nickname)

        return result[0]

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}

export const assigneesTask = async (assignee_id: Assignee): Promise<void> => {

    try {

        await connection.insert({
            task_id: assignee_id.task_id,
            user_id: assignee_id.user_id
        })
        .into("assignees")

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }


}