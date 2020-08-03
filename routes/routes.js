const {index, create, update, destroy} = require('../controllers/controllers.js')

const express = require('express')

const router = express.Router();

router.get('/', index)

router.get('/', create)

module.exports = router;

