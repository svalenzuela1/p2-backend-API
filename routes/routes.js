const {index, create, update, destroy} = require('../controllers/controllers.js')

const express = require('express')

const router = express.Router();

router.get('/', index)

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', destroy)

module.exports = router;

