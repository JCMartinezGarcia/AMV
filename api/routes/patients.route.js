var express = require('express');
var router = express.Router();

const {
    getPatientsHandler,
    registerPatientHandler,
    updatePatientHandler,
    deletePatientHandler,
    searchPatientsHandler,
    countPatientsHandler
} = require('../handlers');

// const authMiddleware = require('../middlewares/authMiddleware');

// router.use(authMiddleware); // All patient routes are protected

router.get('/list', getPatientsHandler);
router.post('/register', registerPatientHandler);
router.put('/update/:id', updatePatientHandler);
router.delete('/delete/:id', deletePatientHandler);
router.post('/search', searchPatientsHandler);
router.get('/count', countPatientsHandler);

module.exports = router;
