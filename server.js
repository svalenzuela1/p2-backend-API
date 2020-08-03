//require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')

const app = express()

app.get('/', (req, res) => {
    res.send('backend works')
})

app.listen(3000, () => {
    console.log('listening on port')
})