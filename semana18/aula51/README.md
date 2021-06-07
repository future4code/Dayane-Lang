## EXERCÍCIOS AULA51
---

# EXERCÍCIO 1

a)As ids podem possuir letras e números, portanto, o fato delas serem declaradas como uma string aumentará a segurança de cada um e tornará seus ids únicos.
Uma string pode conter números e letras juntos, aumentando a segurança e tornando os ids únicos.

b)
    import { v4 } from "uuid";

        export function generateId(): string {
        return v4();
    }

-----

# EXERCÍCIO 2    

a)  O userTableName está chamando a tabela 'User'.
    A função connection é referente aos dados de acceso do criador do código da aplicação ao bando de dados, que estão sendo guardados no arquivo .env.
    A query createUser está inserindo na tabela 'USer' id, email e password.


b)  CREATE TABLE `Users_aula51` (
        `id` varchar(64) PRIMARY KEY NOT NULL UNIQUE,
        `email` varchar(64) NOT NULL,
        `password` varchar(255) NOT NULL
    );


c)  export const insertUser = async ( user: users ) => {
		await connection
	    .insert({
	      id: user.id,
	      email: user.email,
	      password: user.password,
	    })
	    .into(userTableName);
	};

-----
# EXERCÍCIO 3

a) O termo "as string" informa Que o valor recebido será uma string e não Qualuer valor,como undefined.

b)      import * as jwt from  'jsonwebtoken';
        import { authenticationData } from '../types/authenticationData';


        export function generateToken(id: string): string {

            const token: string = jwt.sign({id},
                process.env.JWT_KEY as string,
                {expiresIn: "1d"})

            return token
        }

       


    **authenticationData.ts** - dentro da pasta type Que contem um type  para representar o input dessa função:

        export type authenticationData = {
            id: string
        }

-----

# EXERCÍCIO 4

a) 
        export default async function createUser(
            req: Request, 
            res: Response
            ): Promise<void> {

            const { email, password } = req.body

            try {
                
                if (!req.body.email || req.body.email.indexOf("@") === -1) {

                throw new Error("E-mail inválido!")
                }

                if (!req.body.password || req.body.password.length < 6) {

                    throw new Error("A senha deve conter mais de seis digitos!")
                }

                const id: string = generate()

                const newUser: users = {
                    id: generate(),
                    email,
                    password
                }

                await insertUser(newUser)

                const token = generateToken(id)


                res
                    .status(200)
                    .send({message: "Usuário criado com sucesso!", token})

            } catch (error) {

                res.status(400).send({

                    message: error.message || error.sqlMessage
                })
            }
            }

b) 
        try {
                    
                    if (!req.body.email || req.body.email.indexOf("@") === -1) {

                    throw new Error("E-mail inválido!")
                    }

                    if (!req.body.password || req.body.password.length < 6) {

                        throw new Error("A senha deve conter mais de seis digitos!")
                    }

                    const id: string = generate()

                    const newUser: users = {
                        id: generate(),
                        email,
                        password
                    }

c)

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
            }

-----

# EXERCÍCIO 5

a)
            export const selectUserByEmail = async(email: string): Promise<any> => {

            try {

                const result = await connection
                .select("*")
                .from(userTableName)
                .where({ email })
            
                return result[0]

            } catch (error) {

                throw new Error(error.message || error.sqlMessage)
            }
            
            }

-----

# EXERCÍCIO 6

a)

            export default async function loginUser(
                req: Request, 
                res: Response
                ): Promise<void> {

                const input: loginInput = {
                    email: req.body.email,
                    password: req.body.password
                }

                try {

                    
                    if (!input.email || input.email.indexOf("@") === -1) {

                    throw new Error("E-mail inválido!")
                    }

                    const user = await selectUserByEmail(input.email)

                    if(!user) {

                        res.statusCode = 404

                        throw new Error("Usuário não encontrado!")
                    }


                    if (!input.password || input.password.length < 6) {

                        throw new Error("A senha deve conter mais de seis digitos!")
                    }


                    if(user.password !== input.password) {

                        res.statusCode = 401

                        throw new Error("Senha inválida!")
                    }

                    const token = generateToken(user.id)


                    res
                        .status(200)
                        .send({message: "Success", token})

                } catch (error) {

                    res.status(400).send({

                        message: error.message || error.sqlMessage
                    })
                }
            }

b)
            if (!input.email || input.email.indexOf("@") === -1) {

                throw new Error("E-mail inválido!")
            }

-----
# EXERCÍCIO 7

a) O termono 'as any' significa que qualquer valor pode ser atribuído, desde que pelo menos um valor seja atribuído. O seu uso é necessário para não dar erro na hora de transpilar.


b) 

        export function getTokenData(token: string): authenticationData{
            const payload = jwt.verify(token, process.env.JWT_KEY!)
            return payload as authenticationData;
        }
-----

# EXERCÍCIO 8

a) 
        export const selectUserById= async(id: string): Promise<any> => {

        try {

            const result = await connection
            .select("*")
            .from(userTableName)
            .where({ id })
        
            return result[0]

        } catch (error) {

            throw new Error(error.message || error.sqlMessage)
        }
        
        }
        
b)
        export default async function getUserById(
            req: Request, 
            res: Response
            ): Promise<any> {
            
            try {

                const token: string = req.headers.authorization as string
                const tokenData: authenticationData = getTokenData(token)

                const user = await selectUserById(tokenData.id)

                if(!user) {

                    res.statusCode = 404

                    throw new Error("Usuário não encontrado!")
                }

                res.status(200).send({message: "Success", id: user.id, email: user.email})

            } catch (error) {

                res.status(400).send({

                    message: error.message || error.sqlMessage
                })
            }
        }

----



