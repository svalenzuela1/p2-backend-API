const {createCart, addItemToCart, showCarts, showCartById, index, create, update, destroy} = require('../controllers/controllers.js')

const express = require('express')

const router = express.Router();

router.get('/', index)

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', destroy)


//cart routes
router.get('/carts', showCarts)

router.get('/carts/:id', showCartById)

router.post('/carts', createCart)

router.put('/carts/:id', addItemToCart)

module.exports = router;

