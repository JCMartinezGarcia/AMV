var express = require('express');
var router = express.Router();

const {
    getPatientsHandler,
    registerPatientHandler,
    updatePatientHandler
} = require('../handlers');

router.get('/list', getPatientsHandler);
router.post('/register', registerPatientHandler);
router.put('/update/:id', updatePatientHandler);

module.exports = router;
