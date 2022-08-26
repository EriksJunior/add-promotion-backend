import express from 'express'
import { Router, Request, Response } from 'express';

import {ExpiredEmail} from './utils/ExpiredEmail';
import database from './config/database'

import cors from 'cors'
import 'dotenv/config'

import index from './routes/index'

const app = express()
const route = Router();
const expiredEmail = new ExpiredEmail(database)


app.use(cors())
app.use(express.json())

expiredEmail.delete()

app.use(route)
app.use(index)



route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'First code running in Typescript' })
})

app.disable('X-Powered-By')

export default app