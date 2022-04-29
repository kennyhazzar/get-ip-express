const express = require('express')
const app = express()
const PORT = 8000

app.get('/ip', (req, res) => {
    res.send(req.ip)
})

app.listen(PORT, () => console.log(`listening ${PORT}`))