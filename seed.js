require('dotenv').config()

//mongoose library brought in
const mongoose = require('mongoose')

const {productModel, cartModel} = require('./models/schemas.js')

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

//seed data

let products = [
    {
        name: "Final Fantasy VII Remake",
        description: "Your Favorite 90s Game In 2020 Graphics!",
        imageURL: "https://media.giphy.com/media/ZArJhKhh0TsGUVVnYh/giphy.gif",
        price: 79.99
    },
    {
        name: "Yakuza3",
        description: "Majima",
        imageURL: "https://media.giphy.com/media/UsBXUJ7egKUmTJrYca/giphy.gif",
        price: 49.99
    }
]

products, (error, response) => {
    if(error){
        console.log(error)
    }else{
        console.log(response)
    }
}

products.forEach(product => {
   
    productModel.create(product)
    
})

let cart = [
    {
        
    },
    {

    }
]