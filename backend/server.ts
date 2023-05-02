require('dotenv').config()

import { Request, Response } from 'express'
import thoughtsRouter from './routes/api/v1/thoughts'

const express = require('express')
const app = express()

app.use('/api/v1/thoughts', thoughtsRouter)

// app.get("/api/v1/thoughts", (req, res) => {
//     res.status(200).json({
//         status: "success",
//         data: {
//             thoughts: {
//                 id: 1,
//                 message: 'This is a test message', 
//                 email: 'test1@example.com',
//                 anonymous: false
//             }
//         }
//     })
// })
// app.get("/api/v1/thoughts/:id", (req, res) => {
//     console.log(req.params.id)
// })

// app.post("/api/v1/thoughts", (req, res) => {
//     console.log(req)
// })

const port = process.env.PORT || 3100
app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})