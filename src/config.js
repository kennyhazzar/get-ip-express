const express = require('express')

const router = express.Router()

router.use(express.json())

router.use((_, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*'])
    res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

router.use(express.static("public"));

module.exports = { router }