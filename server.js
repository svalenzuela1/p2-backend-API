require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

//.env file
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

//the concatenation adds "" to the mongo database
const mongoURI = process.env.mongoURI + "project2data"

//mongoose connection 
const db = mongoose.connection
const mongoConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//mongo connection to mongoose
mongoose.connect(mongoURI, mongoConfig, () => {
    console.log('MONGO IS CONNECTED')
})



app.get('/', (req, res) => {
    res.send('backend works')
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

