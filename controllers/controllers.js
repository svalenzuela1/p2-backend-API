const {productModel, cartModel} = require('../models/schemas.js')

const index = async (req, res) => {
    try {

    const indexModel = {
        product: await productModel.find({}),
        cart: await cartModel.find({}).populate('product')
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


//NEED TO TARGET PRODUCT FOR CART 
const productOnly = async (req, res) => {
    try{
        const product = await productModel.find()
        res.status(200).json(product)
    }catch(error){
        res.status(400).send(error)
    }
}
//cart functions
const showCarts = async (req, res) => {
    try{
    const carts = await cartModel.find().populate("product")
    res.json(carts)
    }catch(error){
        res.status(400).send(error)
    }
}

const showCartById = async (req, res) => {
    try{
    const cart = await cartModel.findById(req.params.id).populate("product")
    res.json(cart)
    }catch(error){
        res.status(400).send(error)
    }
}

const addItemToCart = async (req, res) => {
    try{
    const cart = await cartModel.findById(req.params.id)
    cart.product.push(req.body.productToAdd)
    await cart.save()
    const updatedCart = await cartModel.findById(req.params.id).populate("product")
    res.json(updatedCart)
    }catch(error){
        res.status(400).send(error)
    }
}

const createCart = async (req, res) => {
    try{
    const cart = await cartModel.create({})
    res.json(cart)
    }catch(error){
        res.status(400).send(error)
    }
}

const deleteItems = async (req, res) => {
    try{
    const cart = await cartModel.findByIdAndDelete(req.params.id)
    res.json(cart)

} catch(error){
    
    res.status(400).send(error)
}
}
module.exports = {productOnly, deleteItems, createCart, addItemToCart, showCarts, showCartById, index, create, update, destroy}

