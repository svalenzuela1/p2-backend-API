//mongoose library brought in
const mongoose = require('mongoose')

const {productModel, cartModel} = require('../models/schemas.js')

//seed data

let product = [
    {
        name: "Final Fantasy VII Remake",
        description: "Your Favorite 90s Game In 2020 Graphics!",
        imageURL: "https://media.giphy.com/media/ZArJhKhh0TsGUVVnYh/giphy.gif",
        price: 79.99
    },
    {
        name: "Yakuza",
        description: "Majima",
        imageURL: "https://media.giphy.com/media/UsBXUJ7egKUmTJrYca/giphy.gif",
        price: 49.99
    }
]

product, (error, response) => {
    if(error){
        console.log(error)
    }else{
        console.log(response)
    }
}