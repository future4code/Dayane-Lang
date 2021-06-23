## EXERCÍCIOS AULA51
---

# EXERCÍCIO 1

a) -Round é um valor para definir o tempo, ou seja, um fator cost. Há uma relação com a requisição: Quanto maior o valor que damos ao cost, mais lenta esta será. Quanto maior o round, melhor será por motivos de segurança. Ex: 12 que é um valor padrão.
- Salt é um dado aleatório gerado pelo bcrypt (um input adicional a mensagem Que será encriptada). 

b) Resposta no arquivo hashManager.ts na pasta services.

c)
    export const compare = async(
        plainText: string, 
        cypherText: string
        ): Promise<boolean> => {
        return bcrypt.compare(plainText, cypherText)
    }

-----

# EXERCÍCIO 2    

a)  O primeiro endpoint Que deve ser modificado é o de Cadastro, pois a senha criada será criptografada primeiramente, para Que possamos em seguida modificar o endpoint de Login. Dessa maneira é possível comparar a senha informada pelo usuário no ato do cadastro com a senha informada ao realizar o login.


b) 
    if (role !== USER_ROLES.ADMIN && role !== USER_ROLES.NORMAL) {
                throw new Error(`"role" deve ser "NORMAL" ou "ADMIN"`)
            }

c) 
       const passwordIsCorrect: boolean = await compare(
            input.password,
            users.password
        )

d) Não  há necessidade de modificar o endpoint 'user/profile', pois esse endpoint utiliza o token que resultou no momento do login e é conferido no header.


-----
# EXERCÍCIO 3

a) 
    ALTER TABLE Users_aula51
    ADD role enum('NORMAL','ADMIN') DEFAULT 'NORMAL';

b) export function getTokenData(token: string): authenticationData{
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as authenticationData
        return {
            id: payload.id,
            role: payload.role
            }
    }

c)  const token = generateToken({
            id,
            role: req.body.role
         })

d) const token = generateToken({
            id: users.id,
            role: users.role
         })

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
        if(!user) {

            res.statusCode = 404

            throw new Error("Usuário não encontrado!")
        }

        res.status(200).send({message: "Success", id: user.id, email: user.email, role: user.role})

----



