const express = require('express')
const app = express()

app.get('/ip', (req, res) => {
    res.send(req.ip)
})

app.listen(8000, () => console.log(`listening 8000`))