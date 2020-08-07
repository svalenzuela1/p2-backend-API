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
        name: "Yakuza",
        description: "Kiryu Kazuma",
        imageURL: "https://media.giphy.com/media/l4EpbzHgRgvDbrJvi/giphy.gif",
        price: 50.00
    },
    {
      name: "Skyrim",
      description: "An Open World Environment",
      imageURL: "https://media.giphy.com/media/TAdayXZ1EB9kc/giphy.gif",
      price:  40.00
    }, 
    {
        name:"Persona 5",
        description: "A Classic.",
        imageURL: "https://media.giphy.com/media/bYgZANGlM0BgI/giphy.gif",
        price: 70.00
    },
    {
        name:"Fallout",
        description: "Get Your Own Pipboy",
        imageURL: "https://media.giphy.com/media/eMVK22cBbgWzx8L1fw/giphy.gif",
        price: 40.00
    },
    {
        name: "Assassin's Creed Odyssey",
        description: "Live Out Ancient Greece As Kassandra Or Alexios",
        imageURL: "https://media.giphy.com/media/8vXcKsDcNwqKBMZ6ms/giphy.gif",
        price: 50.00

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

