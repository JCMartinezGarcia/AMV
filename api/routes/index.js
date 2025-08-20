var express = require('express');
var router = express.Router();

const clients = require('./clients.route');
const users = require('./users');

router.use('/api/clients', clients);
router.use('/api/users', users);

module.exports = router;
