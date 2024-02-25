import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { router } from './routes' 

const app = express()

// Middlewares
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(router)

export default app
