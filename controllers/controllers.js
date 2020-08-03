const {productModel, cartModel} = require('../models/schemas.js')

const index = async (req, res) => {
    try {

    const indexModel = {
        product: await productModel.find({}),
        cart: await cartModel.find({})
    }

    res.status(200).json(indexModel)

} catch (error){

    res.status(400).send(error)

}
}

const create = async (req, res) => {
    try{
    const createModel = {
        product: await productModel.create(req.body),
        cart: await cartModel.create(req.body)
    }

    res.status(200).json(createModel)

} catch(error){

    res.status(400).send(error)
}
}

const update = async (req, res) => {
    try {
    const updateModel = {
        product: await productModel.findByIdAndUpdate(req.params.id, req.body),
        cart: await cartModel.findByIdAndUpdate(req.params.id, req.body)
    }

    res.status(200).json(updateModel)

} catch(error){

    res.status(400).send(error)

}
}

const destroy = async (req, res) => {
    try{
    const destroyModel = {
        product: await productModel.findByIdAndDelete(req.params.id),
        cart: await cartModel.findByIdAndDelete(req.params.id)
    }
    res.json(destroyModel)

} catch(error){
    
    res.status(400).send(error)
}
}

module.exports = {index, create, update, destroy}

