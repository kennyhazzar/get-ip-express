const express = require('express')
const app = express()
const path = require('path')
const { router } = require('./config')
require('dotenv/config')

const PORT = process.env.PORT

app.use(router)

app.get('/ip', (req, res) => {
    try {
        res.status(200).send({ ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim() })
    } catch (error) {
        res.status(500).send({ error: "server error" })
    }
})

app.listen(PORT, () => console.log(`listening: ${PORT}`))