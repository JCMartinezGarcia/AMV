var express = require('express');
var router = express.Router();

const { getClientsHandler } = require('../handlers');

router.use('/api/clients', getClientsHandler);

module.exports = router;
