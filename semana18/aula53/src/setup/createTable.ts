import { connection } from '../index'

const createTable = async(): Promise<void> => {

    try {

        await connection.raw(`
        
            CREATE TABLE Users_Address (
            id VARCHAR(255) PRIMARY KEY UNIQUE,
            street VARCHAR(255) NOT NULL,
            number VARCHAR(64) NOT NULL,
            complement VARCHAR(255),
            neighborhood VARCHAR(255) NOT NULL,
            city VARCHAR(255) ,
            state VARCHAR(255),
            cep VARCHAR(255) NOT NULL,
            user_id VARCHAR(64) UNIQUE NOT NULL,
            FOREIGN KEY (user_id) REFERENCES Users_aula51(id)
            );  
        
        `)


        console.log("Tabela criada com Sucesso!")

        connection.destroy()

    } catch (error) {

      console.log(error.sqlMessage || error.message)

      connection.destroy()
    }

} 
createTable()