const {productModel, cartModel} = require('../models/schemas.js')

const index = async (req, res) => {
    const result = {
        products: await productModel.find({}),
        cart: await cartModel.find({})
    }
    res.json(await result)
}

const create = (req, res) => {
    res.json()
}

const update = (req, res) => {
    res.json()
}

const destroy = (req, res) => {
    res.json()
}

module.exports = {index}