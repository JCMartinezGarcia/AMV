var express = require('express');
var router = express.Router();

const patientsRouter = require('./patients.route');

router.use('/api/patients', patientsRouter);

module.exports = router;
