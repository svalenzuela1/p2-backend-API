const {index} = require('../controllers/controllers.js')

const express = require('express')

const router = express.Router();

router.get('/', index)

module.exports = router;

