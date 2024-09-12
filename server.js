const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Hello world"
    })
})

app.listen(433, () => {
    console.log('server running on port 433')
})