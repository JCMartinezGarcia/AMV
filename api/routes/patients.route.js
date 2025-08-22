var express = require('express');
var router = express.Router();

const {
    getPatientsHandler,
    registerPatientHandler
} = require('../handlers');

router.get('/list', getPatientsHandler);
router.post('/register', registerPatientHandler);

module.exports = router;
