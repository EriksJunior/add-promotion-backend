import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import { Router, Request, Response } from 'express';
import knex from './config/database'


import index from './routes/index'

const app = express()
const route = Router();

app.use(cors())
app.use(express.json())

// setInterval(async () => {
//   try {
//     const teste =  knex.raw(`delete from company WHERE createdAt < date_sub( NOW(), INTERVAL 7 DAY) and id = 'be22169c-b4d7-44fe-8dd4-e852a5ddf450' and confirmed = 0`)
//     console.log(teste.toQuery())
//   } catch (error) {
//     console.log(error)
//   }
// }, 518400000)

// 604800000, 7 days in ms

app.use(route)
app.use(index)


route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'First code running in Typescript' })
})

app.disable('X-Powered-By')

export default app