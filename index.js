const express = require('express')
const app = express()
const path = require('path')
require('dotenv/config')

const PORT = process.env.PORT

app.use(express.json())
app.use((_, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*'])
    res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use(express.static("public"));

app.get('/ip', (req, res) => {
    res.send({ ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim() })
})

app.listen(PORT, () => console.log(`listening: ${PORT}`))