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

setInterval(async () => {
  try {
    await knex.raw(`delete FROM company where date_format(createdAt, '%Y-%m-%d') = date_format(DATE_ADD(NOW(), INTERVAL -7 DAY), '%Y-%m-%d') and id = '2f90e873-6e4a-4407-a4e0-da25857a0f93' and confirmed = 0`)
  } catch (error) {
    console.log(error)
  }
}, 604800000)

// 604800000, 7 days in ms

app.use(route)
app.use(index)


route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'First code running in Typescript' })
})

app.disable('X-Powered-By')

export default app