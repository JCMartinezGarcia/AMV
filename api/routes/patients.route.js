var express = require('express');
var router = express.Router();

const {
    getPatientsHandler,
    registerPatientHandler,
    updatePatientHandler,
    deletePatientHandler
} = require('../handlers');

router.get('/list', getPatientsHandler);
router.post('/register', registerPatientHandler);
router.put('/update/:id', updatePatientHandler);
router.delete('/delete/:id', deletePatientHandler);

module.exports = router;
