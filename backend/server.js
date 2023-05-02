require('dotenv').config()
const express = require('express')
const app = express()

app.get("/thoughts", (req, res) => {
    res.json({
        status: "success",
        thoughts: "tests"
    })
})

const port = process.env.PORT || 3100
app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})