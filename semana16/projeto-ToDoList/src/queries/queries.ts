import { connection } from '../connections/dbConnection';
import { User, Task, TaskRelations } from '../types/types'


export const createUser = async(user: User): Promise<any> => {

    try {

        await connection.insert({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email
          })
          .into("Users");

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
            creator_user_id: task.creator_user_id
        })
        .into("Tasks")

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}

