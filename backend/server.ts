require('dotenv').config()

import { Request, Response } from 'express'
import thoughtsRouter from './routes/api/v1/thoughts'

const express = require('express')
const app = express()

// API Routers
app.use('/api/v1/thoughts', thoughtsRouter)

const port = process.env.PORT || 3100
app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})