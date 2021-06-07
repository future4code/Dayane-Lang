export enum Status {
    TODO = "To_Do",
    DOING = "doing",
    DONE = "done"
}

export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

export type Task = {
    id: string,
    title: string,
    description: string,
    status: Status,
    limit_date: Date,
    author_id: string,
}

export type Assignee = {
    task_id: number,
    user_id: number
 } 
