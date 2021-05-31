import { connection } from '../connections/dbConnection'


const createTables = async (): Promise<any> => {

  try {
   
    await connection.raw(`
      CREATE TABLE todolist_users (
        id VARCHAR(64) PRIMARY KEY, 
				name VARCHAR(64) NOT NULL, 
				nickname VARCHAR(64) UNIQUE NOT NULL, 
				email VARCHAR(64) UNIQUE NOT NULL
      );
    `)

    await connection.raw(`
      CREATE TABLE todolist_tasks (           
        id VARCHAR(64) PRIMARY KEY, 
				title VARCHAR(64) NOT NULL, 
				description VARCHAR(1024) DEFAULT "No description provided",
        status Enum("TO_DO", "DOING", "DONE") DEFAULT "To_Do",
				limit_date DATE NOT NULL,
				author_id varchar(64) NOT NULL,
				FOREIGN KEY (author_id) REFERENCES todolist_users(id)
      );
    `)
    
    await connection.raw(`
      CREATE TABLE todolist_assignees (
        task_id VARCHAR(64),
				assignee_id VARCHAR(64),
        PRIMARY KEY (task_id, assignee_id),
				FOREIGN KEY (task_id) REFERENCES todolist_tasks(id),
				FOREIGN KEY (assignee_id) REFERENCES todolist_users(id)
        ); 
    `)

    console.log("Tabelas criadas com sucesso!")

    connection.destroy()
  
  } catch (error) {

      console.log(error.sqlMessage || error.message)

      connection.destroy()
  }

} 
createTables()