//bring in libraries 
const mongoose = require('mongoose')

const {Schema, model} = mongoose

//document structure for products
const productSchema = new Schema ({
    name: {type: String}, 
    description: {type: String},
    imageURL: {type: String},
    price: {type: Number}
})

const cartSchema = new Schema ({
     product:[
        {
                    type: Schema.Types.ObjectId,
                    ref: 'Product'
        }],
        
    orderSummary: 
        {
            amountOfProducts: {type: Number},
            total: {type: Number},
            tax: {type: Number}
        },
    
});

//create the model for the Schema
const productModel = model('Product', productSchema);

const cartModel = model('Cart', cartSchema)

//export the Schema
module.exports = {productModel, cartModel}
