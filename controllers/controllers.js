const {productModel, cartModel} = require('../models/schemas.js')

const index = async (req, res) => {
    const indexModel = {
        product: await productModel.find({}),
        cart: await cartModel.find({})
    }
    res.json(await indexModel)
}

const create = async (req, res) => {
    const createModel = {
        product: await productModel.create(req.body),
        cart: await cartModel.create(req.body)
    }
    res.json(await createModel)
}

const update = async (req, res) => {
    const updateModel = {
        product: await productModel.findByIdAndUpdate(req.params.id, req.body),
        cart: await cartModel.findByIdAndUpdate(req.params.id, req.body)
    }
    res.json(await updateModel)
}

const destroy = async (req, res) => {
    const destroyModel = {
        product: await productModel.findByIdAndDelete(req.params.id),
        cart: await cartModel.findByIdAndDelete(req.params.id)
    }
    res.json(await destroyModel)
}

module.exports = {index, create, update, destroy}

