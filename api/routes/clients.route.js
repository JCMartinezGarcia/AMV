var express = require('express');
var router = express.Router();

const {
    getClients
} = require('../controllers');

router.get('/', getClients);

module.exports = router;
