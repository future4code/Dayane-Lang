import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import cors from 'cors'
import { AddressInfo } from 'net'
import signup from './endpoints/signup'
import login from './endpoints/login'
import getProfileUser from './endpoints/getProfileUser'
import getAnotherProfile from './endpoints/getAnotherProfile'
import createRecipes from './endpoints/createRecipes'
import getRecipeById from './endpoints/getRecipeById'



dotenv.config()

export const connection = knex({
  client: 'mysql',
  connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
  }
})


const app = express()
app.use(express.json())
app.use(cors())


app.post('/user/signup', signup)
app.post('/user/login', login)
app.get('/user/profile', getProfileUser)
app.get('/users/profile/:id', getAnotherProfile)

app.post('/recipe/create', createRecipes)
app.get('/recipe/:id', getRecipeById)






const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
});