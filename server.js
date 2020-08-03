require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const router = require('./routes/routes.js')


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

//whitelist 
const whiteList = ['http:localhost:3000/']
const corsOptions = {
    origin: function (origin, callback) {
        if(whiteList.indexOf(origin) !== -1){
            callback(null, true)
        } else {
            callback(new Error('not allowed by CORS'))
        }
    } 
}

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static('public'))

app.use('/', router)

//this should show up in localhost or deployed website
app.get('/', (req, res) => {
    res.send('backend works')
})

//listener
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

module.exports = mongoose